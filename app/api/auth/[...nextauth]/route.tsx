import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password", type: "password",
                }
            },
            async authorize(credentials) {
                const { password, createdAt, id, ...dbUserWithoutPassword } = {
                    password: "12344",
                    createdAt: "",
                    id: 1,
                    name: "Paras Kumar",
                    email: "paraskumar2410@gmail.com",
                    image: "https://google.com/icon.png"
                };
                return dbUserWithoutPassword as User;
            }
        })
    ]
});

export { handler as GET, handler as POST };