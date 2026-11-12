import {NextRequest,NextResponse} from 'next/server';
import {negotiateLocale} from '@/lib/locale';
export function proxy(request: NextRequest) {
  const reqHeaders = new Headers(request.headers);
  const pathLocale = request.nextUrl.pathname.split('/')[1];
  reqHeaders.set('x-app-locale', ['en', 'ru', 'ar'].includes(pathLocale)
    ? pathLocale
    : negotiateLocale(request.headers.get('accept-language')));
  const response = NextResponse.next({ request: { headers: reqHeaders } });
  if (process.env.SITE_MODE !== 'production') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }
  return response;
}
export const config={matcher:['/((?!_next/static|_next/image|favicon.ico).*)']};
