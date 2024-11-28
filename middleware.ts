import { NextRequest, NextResponse } from "next/server";

export function middleware({
  headers,
  nextUrl: { pathname, host: baseDomain },
  url,
}: NextRequest) {
  const subdomain = headers
    .get("host")
    ?.replace(new RegExp(`\\.?${baseDomain}$`), "");

  if (["/_next", "/static"].some((prefix) => pathname?.startsWith(prefix)))
    return NextResponse.next();

  if (subdomain)
    return NextResponse.rewrite(
      new URL(`/subdomain/${subdomain}${pathname}`, url)
    );

  if (pathname.startsWith("/subdomain/"))
    return NextResponse.rewrite(new URL("/404", url));

  return NextResponse.next();
}
