import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import AdsScript from "@/components/AdsScript";
import Head from "next/head";
import Script from "next/script";
import PlaceAds from "@/components/ads/PlaceAds";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Short",
  description: "A powerful URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Ads Meta */}
        <meta name="google-adsense-account" content="ca-pub-4863734906175420" />
        {/* Ads Meta End */}
      </Head>
      <body className={inter.className}>
        <AdsScript />
        <PlaceAds />

        <NavBar />
        {children}
      </body>
    </html >
  );
}
