# Domain migration: tradepro-ph.com

Date: 2026-08-27
Registrar: GoDaddy. Owner completed SMS verification.
Cloudflare zone: d13c7c9299448710235aceaab78357c6
Cloudflare account: 2520726af8a73ddd60097700ebec6562
Zone active since 2026-08-27T07:39:52.218899Z.
Nameservers verified in GoDaddy: bethany.ns.cloudflare.com, kevin.ns.cloudflare.com.

## DNS preservation

Imported 20 functional records as DNS only. Original backup: tradepro-ph.com-original.zone. Imported configuration: tradepro-ph.com-cloudflare.zone.
Pinned cpanel, webdisk, webdisk.admin, whm and www.admin to original hosting IP 118.139.181.29. Existing mail and admin A records remain unchanged.
With explicit owner approval, deleted only the apex A 118.139.181.29 and www CNAME tradepro-ph.com. Cloudflare Worker custom domains now manage these two web hostnames.
MX remains priority 0 smtp.secureserver.net and priority 10 mailstore1.secureserver.net, verified against the authoritative Cloudflare nameserver. SPF, DKIM, DMARC, SRV and verification records were retained. Mail delivery itself was not tested.

## Deployment and verification

Worker: tradepro-dynamics
Version: 7a7556f0-1013-456a-9d17-20578d5e1291
Custom domains: tradepro-ph.com, www.tradepro-ph.com, tradepro.niko.center.
Canonical, hreflang, structured data and sitemap now use https://tradepro-ph.com.
Build and rendered tests passed. Live checks using the authoritative Cloudflare IP (curl --resolve, normal TLS validation) passed for /en/, /ru/, www /en/, assets, fonts, API validation, sitemap, robots and remembered-language redirect.

The local recursive DNS cache still resolves the old Apache hosting, returning 404 for /ru/. Authoritative DNS resolves the new Cloudflare IPs. Public propagation is not yet verified everywhere. The old tradepro.niko.center hostname remains serving the site; permanent redirection is deferred until propagation is confirmed.

For rollback, restore the two original web records from the backup after removing their Worker custom-domain bindings. Do not restore GoDaddy NS/SOA records into the Cloudflare zone.
