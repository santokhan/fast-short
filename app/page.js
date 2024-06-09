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
        {/* Ads */}
        <div className='flex justify-center items-center'>
          <div className="mt-10 ad-script-setup"></div>
        </div>
        {/* Ads End */}
        {/* <Script
          id="ad-script-setup"
          strategy="beforeInteractive"
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
        /> */}
        {/* <AdsF1 /> */}
        {/* <AdsF1 /> */}
        {/* <AdsF1 /> */}
      </main>
      <Footer />
    </>
  )
}
