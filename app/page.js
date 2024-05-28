'ues server'

import { AdsF1 } from '@/components/AdsScript'
import NavbarSpace from '@/components/NavbarSpace'
import Section from '@/components/Section'
import Footer from '@/components/footer/Footer'
import URLShort from '@/components/form/URLShorter'
import NavBar from '@/components/navbar/NavBar'
import AuthProvider from '@/context/AuthContext'
import Script from 'next/script'

export default async function URLShortFormPage({ searchParams }) {
  // const error = { ...searchParams }

  return (
    <>
      <NavBar />
      <main className='min-h-screen'>
        <NavbarSpace />
        <Section className='space-y-8'>
          {/* <URLShorterForm error={error} /> */}
          <AuthProvider>
            <URLShort />
          </AuthProvider>
        </Section>
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
        <AdsF1 />
        <AdsF1 />
        <AdsF1 />
      </main>
      <Footer />
    </>
  )
}
