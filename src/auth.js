import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { NextResponse } from "next/server";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

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
      const { pathname, searchParams, origin } = request.nextUrl; //get the pathname from the request URL
      const userRole = auth?.user?.role;
      const isLoggedIn = !!userRole; //check if the user is authenticated
      const isInLoginPage = pathname.startsWith("/login"); //check if the user is in the login page
      const isInDashboardPages = pathname.startsWith("/dashboard"); //check if the user is in the dashboard pages
      const isAPITokenValid = getIsTokenValid(auth?.accessToken); //check if the access token is valid

      if (isLoggedIn && isAPITokenValid) {
        if (isInLoginPage) {
          const url = searchParams.get("callbackUrl") || `${origin}/dashboard`; //get the callback URL from the search params or the origin
          return NextResponse.redirect(url); //if the user is authenticated and is in the login page, redirect to the dashboard
        } else if (isInDashboardPages) {
          const isUserAuthorized = getIsUserAuthorized(userRole, pathname); //check if the user is authorized to access the dashboard pages
          if (!isUserAuthorized) {
            return NextResponse.redirect(`${origin}/unauthorized`); //if the user is not authorized, redirect to the unauthorized page
          }
        }
      } else if (isInDashboardPages) {
        return NextResponse.redirect(`${origin}/login`); //if the user is not authenticated and is in the dashboard pages, redirect to the login page with the callback URL
      }
      return true;
    },
    //middleware to handle JWT token
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    //middleware to handle session
    async session({ session, token }) {
      const { accessToken, user } = token;

      const isAPITokenValid = getIsTokenValid(accessToken); //check if the access token is valid
      if (!isAPITokenValid) {
        return NextResponse.redirect("/login"); //if the access token is not valid, redirect to the login page
      }

      session.accessToken = accessToken; //set the access token in the session
      session.user = user; //set the user data in the session
      return session; //return the session
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // use JWT for session management
  },
  trustHost: true, // if you are using a custom domain, set this to true
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
