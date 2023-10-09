// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
 
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    //console.log("tok ", req.nextauth.token.user.data.ROLE);

    if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin")
      return NextResponse.rewrite(
        new URL("/auth/login?message=You Are Not Authorized!", req.url)
      );
    if (req.nextUrl.pathname.startsWith("/user") &&  (req.nextauth.token?.user as any).data && // Use type assertion here
        (req.nextauth.token?.user as any).data.ROLE !== "USER")
      return NextResponse.rewrite(
        new URL("/auth/login?message=You Are Not Authorized!", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};


