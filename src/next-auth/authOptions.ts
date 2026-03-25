import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
              headers: { "Content-Type": "application/json" },
            },
          );
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
            throw new Error(data.message || "something went wrong");
          }
          console.log("authorize", data);

          return {
            id: "",
            email: data.user.email,
            name: data.user.name,
          };
        } catch (error) {
          console.log(error);
          throw new Error((error as Error).message);
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  session: {
    maxAge: 60 * 60 * 24 * 7,
  },
};
