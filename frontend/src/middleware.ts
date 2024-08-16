import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0/edge'

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const session = await getSession(req, res)
  const userId = session?.user.sub
  if (!userId) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/', '/edit'],
}
