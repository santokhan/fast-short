import { Inter } from 'next/font/google';
import './globals.css';
import AdsenseScript from '@/components/AdsenseScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fast Short',
  description: 'A powerful URL shortener',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <AdsenseScript />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
