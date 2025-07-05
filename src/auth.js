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
    authorized({ auth, request }) {
      return true;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
