export function GET(){return new Response('User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: https://tradepro-ph.com/sitemap.xml\n',{headers:{'Content-Type':'text/plain'}});}
