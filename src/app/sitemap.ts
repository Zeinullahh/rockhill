import type {MetadataRoute} from 'next';
import {projects,updates} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{if(process.env.SITE_MODE!=='production')return [];const base=process.env.SITE_URL||'https://example.com';const paths=['','projects','updates','about',...projects.map(p=>`projects/${p.slug}`),...updates.map(u=>`updates/${u.slug}`)];return ['en','ru','ar'].flatMap(locale=>paths.map(path=>({url:`${base}/${locale}${path?'/'+path:''}`,lastModified:new Date()})))}
