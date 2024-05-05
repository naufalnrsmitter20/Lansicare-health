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
  "/administration/editPasien",
  "/administration/profile",
];

const authPage = ["/signin", "/signup"];
const adminRole = ["dokter", "superadmin"];

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

      if (!token && !authPage.includes(pathName)) {
        const url = new URL("/signin", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      if (token) {
        if (
          (pathName === "/administration/login" && token.role === "dokter") ||
          (pathName === "/administration/login" && token.role === "superadmin")
        ) {
          return NextResponse.redirect(
            new URL("/administration/insight", req.url),
          );
        }
        if (authPage.includes(pathName)) {
          return NextResponse.redirect(new URL("/profile", req.url));
        }
        if (
          token.role === "pasien" &&
          onlyAdminPage.some((page) => pathName.startsWith(page))
        ) {
          return NextResponse.redirect(new URL("/profile", req.url));
        }
      }
    }

    return middleware(req, next);
  };
}
