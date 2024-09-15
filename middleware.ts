import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-up", "/sign-in"]);

export default clerkMiddleware((auth, req: NextRequest) => {
  const { userId, orgId } = auth();
  const pathname = new URL(req.url).pathname;
  const origin = req.headers.get('origin') || 'http://localhost:3000';

  console.log('Auth:', { userId, orgId }); // Debug log for auth object
  console.log('Request URL:', req.url); // Debug log for request URL
  console.log('Pathname:', pathname); // Debug log for pathname

  // If the user is authenticated and it's a public route
  if (userId && isPublicRoute(req)) {
    if (pathname === '/sign-up' || pathname === '/sign-in') {
      // If the user is authenticated, they should not be redirected to sign-up or sign-in
      return NextResponse.next();
    }
    let path = '/select-org';
    if (orgId) {
      path = `/organization/${orgId}`;
    }
    const orgSelection = new URL(path, origin);
    return NextResponse.redirect(orgSelection);
  }

  // If the user is not authenticated and it's not a public route
  if (!userId && !isPublicRoute(req)) {
    console.log('Redirecting to sign-in'); // Debug log for redirection
    const signInUrl = new URL('/sign-in', origin);
    signInUrl.searchParams.set('returnBackUrl', `${origin}/`); // Redirect to home page after sign-in
    return NextResponse.redirect(signInUrl);
  }

  // If the user is authenticated but does not have an organization and is not on /select-org
  if (userId && !orgId && pathname !== "/select-org") {
    const orgSelection = new URL('/select-org', origin);
    return NextResponse.redirect(orgSelection);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
