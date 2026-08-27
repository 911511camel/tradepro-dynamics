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
