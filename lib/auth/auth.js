import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

const Auth = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "",
    pages: {
        signIn: "/auth/signin",
        newUser: undefined,
    }
})

export default Auth;