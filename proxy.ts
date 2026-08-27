import { NextRequest, NextResponse } from 'next/server';
export function proxy(request:NextRequest){
 const headers=new Headers(request.headers);
 headers.set('x-tradepro-locale',request.nextUrl.pathname.split('/')[1]==='ru'?'ru':'en');
 const response=NextResponse.next({request:{headers}});
 if(/^\/(en|ru)(\/|$)/.test(request.nextUrl.pathname)) response.cookies.set('tradepro_lang',headers.get('x-tradepro-locale')!,{path:'/',maxAge:31536000,sameSite:'lax',secure:true});
 return response;
}
export const config={matcher:['/','/en/:path*','/ru/:path*']};
