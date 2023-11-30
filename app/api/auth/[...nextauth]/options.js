import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../../libs/prismadb'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { lable: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if (!user || !user?.hashedPassword) {
            throw new Error('Invalid credentials')
          }
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          )

          if (!passwordMatch) {
            throw new Error('Invalid credentials')
          }

          return user
        } catch (error) {
          console.log('Error: ', error)
        }
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    }
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.accessToken = user.accessToken
  //       token.refreshToken = user.refreshToken
  //       token.accessTokenExpires = user.accessTokenExpires
  //       token.role = user.role
  //       token.id = user.id
  //     }

  //     return token
  //   },

  //   async session({ session, token }) {
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         accessToken: token.accessToken,
  //         refreshToken: token.refreshToken,
  //         role: token.role,
  //         id: token.id
  //       },
  //       error: token.error
  //     }
  //   }
  // },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/'
  }
}
