import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Short",
  description: "A powerful URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4863734906175420" />
      </Head>
      <body className={inter.className}>
        <Script
          id='ad-script-cdn'
          async={true}
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4863734906175420'
          // crossOrigin='anonymous'
          strategy='afterInteractive'
        />

        <NavBar />
        {children}
      </body>
    </html >
  );
}
