export {default} from "next-auth/middleware"

export const config = {matcher: ["/questions/addquestion", "/questions/newquestion", "/blog-user", "/chat/:path*", "/blog-admin", "/conversations/:path*"]}

