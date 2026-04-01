import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "FreshCart",
      credentials: {
        email: {
          label: "userEmail",
          placeholder: "example@email.com",
          type: "email",
        },
        password: {
          label: "userPassword",
          placeholder: "******",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const response = await fetch(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || "something went wrong");
          }
          // const decoded = JSON.parse(atob(data.token).split(".")[1]);
          interface DecodedToken {
            id: string;
          }
          const decoded = jwtDecode<DecodedToken>(data.token);

          return {
            id: decoded.id,
            email: data.user.email,
            name: data.user.name,
            accessToken: data.token,
          };
        } catch (error) {
          throw new Error((error as Error).message);
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt({ token, user }) {

      if (user) {
        token.accessToken = user.accessToken;
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    session({ token, session }) {
      //1-use session , 2-getServerSessions 3-/api/auth/session
      session.user = token.user;

      return session;
    },
  },

  session: {
    maxAge: 60 * 60 * 24 * 7,
  },
};
