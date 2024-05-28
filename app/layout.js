import { Inter } from 'next/font/google'
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
