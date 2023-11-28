import NextAuth from 'next-auth/next'
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
        const { email, password } = credentials
        if (!email || !password) {
          throw new Error('Invalid credentials')
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: email
            }
          })

          if (!user || !user?.hashedPassword) {
            throw new Error('Invalid credentials')
          }
          const passwordMatch = await bcrypt.compare(
            password,
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
    async jwt({ token, user, session }) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.accessTokenExpires = user.accessTokenExpires
        token.role = user.role
        token.id = user.id
      }

      return token
    },

    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          role: token.role,
          id: token.id
        },
        error: token.error
      }
    }
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
