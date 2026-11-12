import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {negotiateLocale} from '@/lib/locale';
export default async function Page(){const h=await headers();redirect(`/${negotiateLocale(h.get('accept-language'))}`)}
