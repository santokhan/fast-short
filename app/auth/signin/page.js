import Section from "@/components/Section";
import GoogleSignInForm from "@/components/form/SignInForm";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="h-16"></div>
        <Section>
          <GoogleSignInForm />
        </Section>
      </main>
    </>
  );
}
