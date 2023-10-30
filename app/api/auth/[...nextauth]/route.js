import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDb from "../../../../libs/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password, role } = credentials;
        try {
          await connectMongoDb();
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("Invalid credentials");
          }
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.accessTokenExpires;
        token.role = user.role;
        token.id = user.id;
      }

      return token;
    },

    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          role: token.role,
          id: token.id,
        },
        error: token.error,
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
