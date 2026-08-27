'use client';
export default function LanguageSwitch({lang}) {
 return <>{['en','ru'].map(code=><a key={code} id={`lang-${code}`} href={`/${code}/`} hrefLang={code} lang={code} aria-current={code===lang?'page':undefined} className={`px-2.5 py-1 rounded ${code===lang?'bg-emerald-bio text-white font-bold':'text-gray-300 hover:text-white'}`} onClick={e=>{
  if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
  e.preventDefault(); document.cookie=`tradepro_lang=${code}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
  window.location.assign(`/${code}/${window.location.search}${window.location.hash}`);
 }}>{code.toUpperCase()}</a>)}</>;
}
