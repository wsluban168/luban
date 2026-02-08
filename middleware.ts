import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 放行登录页和静态资源
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  // 判断是否已登录
  const auth = request.cookies.get('admin_auth')
  if (auth?.value === 'ok') {
    return NextResponse.next()
  }

  // 未登录，跳转到登录页
  const loginUrl = new URL('/login.html', request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: '/:path*',
}
