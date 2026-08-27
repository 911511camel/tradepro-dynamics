import assert from 'node:assert/strict';
import test from 'node:test';
import {handleLeadRequest, ROUTING_CONFIG} from '../lib/lead-routing.js';
const valid = {leadType:'b2b-export',fullName:'Test Contact',corporateEmail:'test@example.com',companyName:'Test Co',product:'Coconut oil',volume:'2 FCL',incoterms:'FOB'};
const request = data => new Request('http://localhost/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
test('rejects malformed and invalid requests',async()=>{
  for (const data of [null,[],{}, {...valid,leadType:'__proto__'},{...valid,fullName:42},{...valid,corporateEmail:'bad'},{...valid,product:''}]) {
    assert.equal((await handleLeadRequest(request(data),'https://crm.example')).status,400);
  }
  assert.equal((await handleLeadRequest(new Request('http://localhost',{method:'POST',headers:{'Content-Type':'application/json'},body:'{'}),'https://crm.example')).status,400);
});
test('does not claim success when CRM is absent or fails',async()=>{
  assert.equal((await handleLeadRequest(request(valid),undefined)).status,503);
  assert.equal((await handleLeadRequest(request(valid),'https://crm.example',async()=>new Response('',{status:500}))).status,502);
  assert.equal((await handleLeadRequest(request(valid),'https://crm.example',async()=>{throw Error('secret')})).status,502);
});
test('routes all three inquiry types and preserves supplied details',async()=>{
  for(const leadType of Object.keys(ROUTING_CONFIG)) {
    const payload={...valid,leadType,projectName:'Port',ticketSize:'$5M',specialization:'Teacher',notes:'Please contact'};
    let record;
    const response=await handleLeadRequest(request(payload),'https://crm.example',async(url,options)=>{record=JSON.parse(options.body);return new Response('',{status:202});});
    assert.equal(response.status,200);
    assert.equal((await response.json()).success,true);
    assert.equal(record.pipeline,ROUTING_CONFIG[leadType].crmPipelineId);
    assert.equal(record.custom_fields.incoterms,'FOB');
    assert.equal(record.custom_fields.target_volume,'2 FCL');
    assert.equal(record.custom_fields.notes,'Please contact');
  }
});

test('selects dedicated webhooks without falling back across departments',async()=>{
 const webhooks={'b2b-export':'https://export.example','ppp-investor':'https://invest.example','csr-intake':'https://csr.example'};
 for(const leadType of Object.keys(webhooks)){
  let destination;
  const response=await handleLeadRequest(request({...valid,leadType,projectName:'Port',ticketSize:'$5M',specialization:'Doctor'}),webhooks,async(url)=>{destination=url;return new Response('',{status:202});});
  assert.equal(response.status,200);assert.equal(destination,webhooks[leadType]);
 }
 let called=false;
 assert.equal((await handleLeadRequest(request(valid),{'csr-intake':'https://csr.example'},async()=>{called=true;return new Response('');})).status,503);
 assert.equal(called,false);
});

test('recalculates batch weight and rejects invalid packaging server-side',async()=>{
 let record;
 const payload={...valid,productId:'vco',packaging:'drum-200',packageCount:'80',estimatedWeightKg:'1'};
 const response=await handleLeadRequest(request(payload),{'b2b-export':'https://export.example'},async(_,init)=>{record=JSON.parse(init.body);return new Response('');});
 assert.equal(response.status,200);assert.equal(record.custom_fields.estimated_net_weight_kg,14560);assert.equal(record.custom_fields.package_count,80);
 assert.equal((await handleLeadRequest(request({...payload,packaging:'box-20'}),'https://export.example')).status,400);
});

import {estimateBatch,PRODUCTS} from '../lib/batch-config.js';
test('estimates supported package weights and rejects invalid counts',()=>{
 assert.equal(estimateBatch('vco','drum-200',80).netKg,14560);
 assert.equal(estimateBatch('bananas','box-13.5',10).netKg,135);
 for(const value of ['',0,-1,1.2,'NaN',Infinity,100001]) assert.equal(estimateBatch('vco','drum-200',value),null);
 for(const product of PRODUCTS) for(const pack of product.packs) assert.equal(estimateBatch(product.id,pack.id,1).netKg,pack.kg);
 assert.equal(estimateBatch('unknown','drum-200',1),null);
});

test('secondary text tokens meet 4.5:1 against marine background',()=>{
 function luminance(hex){const rgb=hex.match(/[a-f0-9]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;}
 const bg=luminance('152438');
 for(const color of ['94A3B8','CBD5E1']) assert.ok((luminance(color)+.05)/(bg+.05)>=4.5);
});

import {structuredData} from '../lib/seo.js';
test('structured data represents the source office, ports and catalog without invented offers',()=>{
 for(const lang of ['en','ru']){
  const graph=structuredData(lang)['@graph'];
  assert.equal(graph.filter(n=>n['@type']==='Product').length,7);
  assert.equal(graph.filter(n=>n['@type']==='Place').length,3);
  assert.equal(graph.find(n=>n['@type']==='LocalBusiness').address.addressLocality,'Davao City');
  assert.ok(graph.every(n=>!n.offers&&!n.aggregateRating));
 }
});

test('server renders localized metadata, language and content; retains language on root redirect', {skip:process.env.TEST_BUILD!=='1'},async()=>{
 const {default:worker}=await import('../dist/server/index.js');
 const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
 const context={waitUntil(){},passThroughOnException(){}};
 async function page(path,headers={}){return worker.fetch(new Request('https://tradepro.niko.center'+path,{headers:{accept:'text/html',...headers}}),env,context);}
 for(const lang of ['en','ru']){
  const response=await page(`/${lang}/`);assert.equal(response.status,200);
  assert.match(response.headers.get('set-cookie')||'',new RegExp(`tradepro_lang=${lang}`));
  const html=await response.text();
  assert.match(html,new RegExp(`<html lang="${lang}"`));
  assert.match(html,lang==='ru'?/Ориентировочный вес нетто/:/Estimated net weight/);
  assert.match(html,/<link[^>]+rel="canonical"[^>]+href="https:\/\/tradepro.niko.center\/(en|ru)\/"/);
  assert.match(html,/hreflang="en"/i);assert.match(html,/hreflang="ru"/i);
  const json=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);assert.ok(json);
  assert.equal(JSON.parse(json[1])['@graph'].filter(n=>n['@type']==='Product').length,7);
  assert.match(html,/id="calc-pack"/);assert.match(html,/id="calc-count"/);
 }
 const root=await page('/',{cookie:'tradepro_lang=ru'});assert.ok([302,303,307,308].includes(root.status));assert.match(root.headers.get('location'),/\/ru\/$/);
 assert.equal((await page('/de/')).status,404);
 const sitemap=await page('/sitemap.xml');assert.equal(sitemap.status,200);assert.match(await sitemap.text(),/hreflang="ru"/);
});
