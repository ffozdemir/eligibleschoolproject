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
         return data; //return the user data
      },
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
