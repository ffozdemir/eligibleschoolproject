import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const authConfig = {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        //this method will create a user session
        const res = await login(credentials);
        const data = await res.json();
        if (!res.ok) {
          return null; //if the response is not ok, return null
        }

        const payload = {
          user: { ...data },
          accessToken: data.token,
        };

        delete payload.user.token;

        return payload; //return the user data
      },
    }),
  ],
  callbacks: {
    // middleware to check if the user is authenticated
    authorized({ auth, request }) {
      return true;
    },
    //middleware to handle JWT token
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    //middleware to handle session
    async session({ session, token }) {
      const { accessToken, user } = token;

      session.user = user; //set the user data in the session
      session.accessToken = accessToken; //set the access token in the session
      return session; //return the session
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
