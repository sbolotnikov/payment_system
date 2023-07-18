import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })

//   const session = await getToken({ req, secret: process.env.SECRET })
//   if ((req.nextUrl.pathname === "/admin")||(req.nextUrl.pathname === "/user_screen")||(req.nextUrl.pathname.includes("/adm_location/"))||(req.nextUrl.pathname.includes("/api/admin"))||(req.nextUrl.pathname.includes("/api/supervise"))) {
//     if ((!session)||((session.status!=='super')&&(session.status!=='admin'))) return NextResponse.redirect("/login");

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/r/:path*/submit', '/r/create'],
}