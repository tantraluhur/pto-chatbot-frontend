import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/login") {
    return NextResponse.next();
  }
  const PROTECTED_ROUTES = ["chat"];

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.includes(route)
  );

  if (isProtectedRoute) {
    if (
      request.cookies.get("next-auth.session-token") ||
      request.cookies.get("__Secure-next-auth.session-token")
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(`http://localhost:3000/`);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}; // Ignore static routes and api routes