import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User{
       
            _id: string,
            name: string,
            email: string,
            role: string,
            accessToken: string,
            refreshToken: string

    }

    interface Session extends DefaulSession {
        user: User,
        expires: string,
        error: string
    }
}

// declare module "next-auth/jwt" {
//     interface JWT extends DefaultJWT {
//         role: string,
//     }
// }