import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { authKey } from "./contants/authkey";
import { TUser } from "./types";

const commonRoute = ["/dashboard", "/dashboard/change-password"];
const authRoutes = ["/login", "/register"];
// This function can be marked async if using await inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get(authKey)?.value;
  // console.log(accessToken);
  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    (accessToken && commonRoute.includes(pathname)) ||
    pathname.match(/^\/dashboard\/edit-trip\/([^\/]+)$/)
  ) {
    return NextResponse.next();
  }
  let decode = null;
  if (accessToken) {
    decode = jwtDecode(accessToken) as TUser;
  }
  // console.log(decode);
  const role = decode?.role;
  if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }
  if (role === "USER" && pathname.startsWith("/dashboard/user")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
