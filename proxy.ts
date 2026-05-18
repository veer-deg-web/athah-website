import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const isPrivatePath =
    pathname.startsWith("/api/") || pathname.startsWith("/admin");

  response.headers.set(
    "X-Robots-Tag",
    isPrivatePath
      ? "noindex, nofollow, noarchive, nosnippet"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|webp|gif|mp4)$).*)",
  ],
};
