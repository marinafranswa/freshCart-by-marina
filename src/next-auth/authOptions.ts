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
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
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
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },
  },

  session: {
    maxAge: 60 * 60 * 24 * 7,
  },
  events: {
    async signIn(message) {
      console.log("signIn", message);
    },
    async signOut(message) {
      console.log("signOut", message);
    },
    async session(message) {
      console.log("session", message);
    },
  },
  logger: {
    error(code, metadata) {
      console.error("nextauth error", code, metadata);
    },
  },
};
