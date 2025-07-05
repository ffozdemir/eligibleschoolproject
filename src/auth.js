import NextAuth from "next-auth";

const authConfig = {
  providers: [],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
