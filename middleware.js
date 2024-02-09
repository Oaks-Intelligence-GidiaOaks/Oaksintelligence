import { NextResponse } from "next/server";

function middleware(req) {
  const accessToken = req.cookies.get("token");

  const userIsAuthenticated = accessToken !== undefined && accessToken !== "";

  if (!userIsAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login page
  }

  return NextResponse.next();
}

export default middleware;

export const config = {
  matcher: [
    "/eco-kiddies/:path",
    "/eco-tales/:path",
    "/market-intelligence-reports/:path",
    "/surveys/:path",
  ],
};
