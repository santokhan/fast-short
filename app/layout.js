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

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4329678419871301"
          crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        {/* <Script
          id='ad-script-cdn'
          async={true}
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4863734906175420'
          crossOrigin='anonymous'
          strategy='lazyOnload'
        /> */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
