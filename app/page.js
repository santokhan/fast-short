'ues server'

import NavbarSpace from '@/components/NavbarSpace'
import Section from '@/components/Section'
import Footer from '@/components/footer/Footer'
import URLShort from '@/components/form/URLShorter'
import NavBar from '@/components/navbar/NavBar'
import AuthProvider from '@/context/AuthContext'

export default async function URLShortFormPage({ searchParams }) {
  return (
    <>
      <NavBar />
      <main className='min-h-screen'>
        <NavbarSpace />
        <Section className='space-y-8'>
          <AuthProvider>
            <URLShort />
          </AuthProvider>
        </Section>
        <div className='flex justify-center items-center'>
          <div className="mt-10 ad-script-setup"></div>
        </div>
      </main>
      <Footer />
    </>
  )
}
