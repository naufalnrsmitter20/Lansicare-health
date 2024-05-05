import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdminPage = [
  "/administration/insight",
  "/administration/dataPage",
  "/administration/apotek",
  "/administration/editPasien/*",
];

const authPage = ["/signin", "/signup"];
const authAdmin = ["/administration/login"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathName = req.nextUrl.pathname;

    if (requireAuth.includes(pathName)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // If there's no token and the page requires auth, redirect to login
      if (!token && !authPage.includes(pathName)) {
        const url = new URL("/signin", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      // Handle redirects for authenticated users
      if (token) {
        // Redirect to admin insight if logged in at admin login
        if (pathName === "/administration/login" && token.role === "admin") {
          return NextResponse.redirect(
            new URL("/administration/insight", req.url),
          );
        }
        // Redirect to profile if accessing auth pages
        if (authPage.includes(pathName)) {
          return NextResponse.redirect(new URL("/profile", req.url));
        }
        // Restrict access to admin-only pages if not admin
        if (
          token.role !== "admin" &&
          onlyAdminPage.some((page) => pathName.startsWith(page))
        ) {
          return NextResponse.redirect(new URL("/profile", req.url));
        }
      }
    }

    return middleware(req, next);
  };
}
