import {i18nData} from './i18n.js';
export const SITE_URL='https://tradepro.niko.center';
export function structuredData(lang) {
 const t=i18nData[lang];
 const organizationId=SITE_URL+'/#organization';
 const address={'@type':'PostalAddress',streetAddress:'Door 1 Sato Bldg, Quimpo Blvd., Ecoland',addressLocality:'Davao City',postalCode:'8000',addressCountry:'PH'};
 return {'@context':'https://schema.org','@graph':[
  {'@type':'Organization','@id':organizationId,name:'TradePro Dynamics Corp.',url:SITE_URL,email:'tradeprodynamics@gmail.com',telephone:'+63 960 475 8965',address,location:{'@id':SITE_URL+'/#head-office'}},
  {'@type':'LocalBusiness','@id':SITE_URL+'/#head-office',name:'TradePro Dynamics Corp. — Davao Head Office',url:`${SITE_URL}/${lang}/#about`,address,telephone:'+63 960 475 8965',parentOrganization:{'@id':organizationId}},
  ...[['davao','Port of Davao','Davao City'],['malalag','Malalag Port Logistics & Maritime Hub','Malalag'],['iligan','Iligan Industrial Port & Logistics Park','Iligan']].map(([id,name,city])=>({'@type':'Place','@id':`${SITE_URL}/#port-${id}`,name,address:{'@type':'PostalAddress',addressLocality:city,addressCountry:'PH'}})),
  ...[['vco','p1_name','p1_desc','coconut'],['coconut-water-cream','p2_name','p2_desc','coconut'],['coir-substrate','p3_name','p3_desc','coconut'],['bananas','c1_title','c1_desc','commodities'],['mango','c2_title','c2_desc','commodities'],['cacao-coffee','c3_title','c3_desc','commodities'],['sugar','c4_title','c4_desc','commodities']].map(([id,title,desc,section])=>({'@type':'Product','@id':`${SITE_URL}/#product-${id}`,name:t[title],description:t[desc],url:`${SITE_URL}/${lang}/#${section}`})),
 ]};
}
