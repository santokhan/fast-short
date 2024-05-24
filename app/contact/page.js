import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className='h-16'></div>

            <header className='max-w-2xl px-4 mx-auto mt-12 mb-4'>
                <h1 className='text-2xl font-bold'>Contact Us</h1>
            </header>

            <main className='min-h-screen'>
                <section className='max-w-2xl px-4 mx-auto'>
                    <p className='text-lg mb-4'>
                        Have questions, suggestions, or need support with our URL shortening service? Reach out to us at
                        <a href='mailto:support@1xshort.com' className='underline ml-2'>
                            support@1xshort.com
                        </a>
                        .
                    </p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contact
