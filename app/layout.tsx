import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL('https://tradepro-ph.com'),title:'TradePro Dynamics Corp.',description:'Philippine commodities, logistics and infrastructure.'};
export default async function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 const lang=(await headers()).get('x-tradepro-locale')==='ru'?'ru':'en';
 return <html lang={lang}><body>{children}</body></html>;
}
