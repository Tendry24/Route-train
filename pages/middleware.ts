import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
 if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect('/home');
 }
 return NextResponse.next();
}