import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split("")
        .join("")
        .toLocaleLowerCase();

      //Andela Strukar
      //andelastrukar

      session.user.uid = token.sub;

      return session;
    },
  },
});
