import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fast Short',
  description: 'A powerful URL shortener'
}

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script
          id="ad-script"
          async
          type="text/javascript">
          {`
        atOptions = {
          'key' : 'e937ad8f007592b5a24d9f9b987c1553',
          'format' : 'iframe',
          'height' : 60,
          'width' : 468,
          'params' : {}
        };
      `}
        </Script>
        <script
          async
          type="text/javascript" src="//www.topcreativeformat.com/e937ad8f007592b5a24d9f9b987c1553/invoke.js"></script>
        {/* <script
              id='ad-script-cdn'
              async={true}
              src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4863734906175420'
              crossOrigin='anonymous'
            /> */}
      </head>
      <body className={inter.className}>
        {children}

      </body>
    </html>
  )
}
