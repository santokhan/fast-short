import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'

const About = () => {
    return (
        <>
            <NavBar />
            <div className='h-16'></div>
            <header className='max-w-2xl px-4 mx-auto mt-12 mb-4'>
                <h1 className='text-2xl font-bold'>About 1x Short</h1>
            </header>

            <main className='min-h-screen'>
                <section className='max-w-2xl px-4 mx-auto'>
                    <p className='text-lg mb-4'>
                        1x Short is the fastest URL shortener for creating custom, shareable short links. Our mission is
                        to provide users with a simple and efficient tool to shorten URLs, making them easier to share
                        and manage.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>Why Choose 1x Short?</h2>
                    <p className='mb-4'>
                        We focus on user experience, and we're always here to help. Our team of experts are available to
                        answer any questions you may have.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>Key Features</h2>
                    <ul className='list-disc pl-6 mb-4'>
                        <li>Fast URL Shortening</li>
                        <li>Custom Short Links</li>
                        <li>Easy Link Management</li>
                        <li>Efficient URL Redirection</li>
                    </ul>

                    <h2 className='text-xl font-semibold mb-2'>Our Mission</h2>
                    <p className='mb-4'>
                        Our mission is to simplify the process of sharing links by providing a fast, reliable, and
                        user-friendly URL shortening service. We believe that every link should be accessible and easy
                        to share, regardless of its length.
                    </p>

                    <h2 className='text-xl font-semibold mb-2'>Contact Us</h2>
                    <p className='mb-4'>
                        Have questions or feedback? Feel free to reach out to us at support@1xshort.com. We're always
                        here to help!
                    </p>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default About
