import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fast Short',
  description: 'A powerful URL shortener',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ad-script-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : 'd592f8f84f38de0159699b8ddb6fc839',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          src="//www.topcreativeformat.com/d592f8f84f38de0159699b8ddb6fc839/invoke.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {/* Place the ad container where you want the ad to appear */}
        <div className="ad-container"></div>
        {children}
      </body>
    </html>
  );
}
