import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import AuthProvider from "@/context/AuthContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Short",
  description: "A powerful URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4863734906175420"
          crossOrigin="anonymous"
        />
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html >
  );
}
