import './globals.css';
import type { Metadata } from 'next';
import {headers} from 'next/headers';
export const metadata:Metadata={title:'Rockhill Development',description:'Residential development in the UAE',robots:process.env.SITE_MODE==='production'?'index, follow':'noindex, nofollow'};
export default async function Layout({children}:{children:React.ReactNode}){const h=await headers(),locale=h.get('x-app-locale')||'en';return <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}><body>{children}</body></html>}
