import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDb from "../../../../libs/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // email: { lable: "Email", type: "text" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
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
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     user && (token.user = user);
  //     return token;
  //     // if (params.user?.role) {
  //     //   params.token.role = params.user.role;
  //     //   params.token.id = params.user.id;
  //     // }
  //     // return params.token;
  //   },
  //   session: async ({ session, token }) => {
  //     const user = token.user;
  //     session.user = user;
  //     return session;
  //     //   if (session.user) {
  //     //     session.user.id = token.id;
  //     //     session.user.role = token.role;
  //     //   }
  //     //   return session;
  //   },
  // },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/register",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
