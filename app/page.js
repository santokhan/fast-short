import NavbarSpace from "@/components/NavbarSpace";
import Section from "@/components/Section";
import UrlShorterForm from "@/components/form/URLShorter";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <NavbarSpace />
        <Section>
          <UrlShorterForm />
        </Section>
      </main>
    </>
  );
}
