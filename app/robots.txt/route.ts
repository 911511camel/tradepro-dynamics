export function GET(){return new Response('User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: https://tradepro.niko.center/sitemap.xml\n',{headers:{'Content-Type':'text/plain'}});}
