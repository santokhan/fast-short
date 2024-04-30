import NavbarSpace from "@/components/NavbarSpace";
import Section from "@/components/Section";
import URLShorterForm from "@/components/form/URLShorterForm";
import URLShort from "@/components/form/URLShorter";
import { AdsF1 } from "@/components/ads/PlaceAds";

export default function URLShortFormPage({ searchParams }) {
  const error = { ...searchParams }

  return (
    <>
      <main className="min-h-screen">
        <NavbarSpace />
        <Section className="space-y-8">
          {/* <URLShorterForm error={error} /> */}
          <URLShort />
        </Section>
        <AdsF1 />
      </main>
    </>
  );
}
