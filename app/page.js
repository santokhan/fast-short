'ues server'

import { AdsF1 } from '@/components/AdsScript'
import NavbarSpace from '@/components/NavbarSpace'
import Section from '@/components/Section'
import Footer from '@/components/footer/Footer'
import URLShort from '@/components/form/URLShorter'
import NavBar from '@/components/navbar/NavBar'
import AuthProvider from '@/context/AuthContext'

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
        <AdsF1 />
        <AdsF1 />
        <AdsF1 />
      </main>
      <Footer />
    </>
  )
}
