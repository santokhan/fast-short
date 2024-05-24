import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            <NavBar />
            <div className='h-16'></div>

            <header className='max-w-2xl px-4 mx-auto px-4 mt-12 mb-4'>
                <h1 className='text-2xl font-bold'>Privacy Policy</h1>
            </header>

            <main className='min-h-screen'>
                <section className='max-w-2xl px-4 mx-auto px-4'>
                    <p className='mb-4'>
                        Your privacy is important to us. It is 1x Short's policy to respect your privacy regarding any
                        information we may collect from you across our website, <a href='#'>https://1xshort.com</a>, and
                        other sites we own and operate.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>Information We Collect</h2>
                    <p className='mb-4'>
                        We only collect information about you if we have a reason to do so – for example, to provide our
                        services, to communicate with you, or to make our services better.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>How We Use Your Information</h2>
                    <p className='mb-4'>We use the information we collect in various ways, including to:</p>
                    <ul className='list-disc pl-6 mb-4'>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Communicate with you, either directly or through one of our partners</li>
                    </ul>

                    <h2 className='text-xl font-semibold mb-2'>Security</h2>
                    <p className='mb-4'>
                        We take reasonable steps to protect personal information from unauthorized access, use, or
                        disclosure. However, no method of transmission over the internet, or method of electronic
                        storage, is 100% secure and reliable, and we cannot guarantee absolute security.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>Changes to This Privacy Policy</h2>
                    <p className='mb-4'>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>Contact Us</h2>
                    <p className='mb-4'>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us
                        at privacy@1xshort.com.
                    </p>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default PrivacyPolicy
