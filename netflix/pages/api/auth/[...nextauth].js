import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@/lib/dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;

        try {
          const user = await pool.query(
            "SELECT * FROM public.users WHERE email = $1",
            [email]
          );
          if (user.rows.length > 0) {

            const match = password === user.rows[0].password;
            if (match) {
              console.log(match)
              return { id: user.rows[0].id, email: user.rows[0].email };
              
            }
            
          }
        } catch (error) {
          console.error("Authorization error:", error);
        }

        return null;
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
