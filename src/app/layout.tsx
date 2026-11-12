import './globals.css';
import type { Metadata } from 'next';
import {headers} from 'next/headers';
export const metadata:Metadata={
  metadataBase:new URL(process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')),
  title:'Rockhill Development',
  description:'Residential development in the UAE',
  openGraph:{type:'website',siteName:'Rockhill Development'},
  twitter:{card:'summary_large_image'},
  robots:process.env.SITE_MODE==='production'?'index, follow':'noindex, nofollow'
};
export default async function Layout({children}:{children:React.ReactNode}){const h=await headers(),locale=h.get('x-app-locale')||'en';return <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}><body>{children}</body></html>}
