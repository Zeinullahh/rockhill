import type {Locale} from './site';

export function negotiateLocale(acceptLanguage:string|null|undefined):Locale{
 const ranked=(acceptLanguage||'').split(',').map((part,index)=>{
  const [tag,...params]=part.trim().toLowerCase().split(';');
  const q=Number(params.find(x=>x.trim().startsWith('q='))?.trim().slice(2)??'1');
  return {tag:tag.split('-')[0],q:Number.isFinite(q)?q:0,index};
 }).sort((a,b)=>b.q-a.q||a.index-b.index);
 for(const item of ranked){if(item.tag==='ar')return 'ar';if(item.tag==='ru')return 'ru';if(item.tag==='en')return 'en'}
 return 'en';
}
