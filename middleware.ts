export {default} from "next-auth/middleware"

export const config = {matcher: ["/questions/:path*", "/blog-user", "/chat/:path*", "/blog-admin", "/conversations/:path*"]}

