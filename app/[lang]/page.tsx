import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TradeproSite from '../../components/TradeproSite';
import { structuredData, SITE_URL } from '../../lib/seo';
type Props = {params:Promise<{lang:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata> {
 const {lang}=await params;
 if(lang!=='en'&&lang!=='ru') return {};
 return {
  title:lang==='ru'?'TradePro Dynamics | Экспорт, логистика и инвестиции':'TradePro Dynamics | Export, Logistics & Investment',
  description:lang==='ru'?'Экспорт филиппинской продукции, конфигуратор оптовой партии, инфраструктурные проекты и гуманитарные программы.':'Philippine exports, bulk shipment configuration, infrastructure projects and humanitarian partnerships.',
  alternates:{canonical:`${SITE_URL}/${lang}/`,languages:{en:`${SITE_URL}/en/`,ru:`${SITE_URL}/ru/`,'x-default':`${SITE_URL}/en/`}},
  openGraph:{url:`${SITE_URL}/${lang}/`,locale:lang==='ru'?'ru_RU':'en_US',alternateLocale:lang==='ru'?'en_US':'ru_RU',siteName:'TradePro Dynamics Corp.',type:'website'},
 };
}
export default async function LocalizedPage({params}:Props) {
 const {lang}=await params; if(lang!=='en'&&lang!=='ru') notFound();
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData(lang)).replace(/</g,'\\u003c')}}/><TradeproSite lang={lang}/></>;
}
