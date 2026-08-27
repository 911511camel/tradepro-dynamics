import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function Home(){
 const lang=(await cookies()).get('tradepro_lang')?.value==='ru'?'ru':'en';
 redirect(`/${lang}/`);
}
