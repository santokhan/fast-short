'ues server'

import NavbarSpace from '@/components/NavbarSpace'
import Section from '@/components/Section'
import URLShorterForm from '@/components/form/URLShorterForm'
import URLShort from '@/components/form/URLShorter'
import { AdsF1 } from '@/components/AdsScript'
import NavBar from '@/components/navbar/NavBar'
import AuthProvider from '@/context/AuthContext'
import Footer from '@/components/footer/Footer'

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
