import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/auth(.*)",
    "/portal(.*)",
    "/images(.*)",
    "/favicon.ico",
  ],
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
