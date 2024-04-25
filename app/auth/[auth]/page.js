'use client'

import Section from "@/components/Section";
import GoogleSignInForm from "@/components/form/SignInForm";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");

    async function handleSignIn() {
        await signIn('google', {
            callbackUrl: redirect || '/dashboard'
        });
    }

    return (
        <main className="min-h-screen">
            <div className="h-16"></div>
            <Section>
                <GoogleSignInForm onSignIn={handleSignIn} />
            </Section>
        </main>
    )
}
