import { SITE_URL } from '../../lib/seo';
export function GET(){
 const links=['en','ru'].map(lang=>`<xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}/${lang}/"/>`).join('');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${['en','ru'].map(lang=>`<url><loc>${SITE_URL}/${lang}/</loc>${links}</url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
