import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='max-w-screen-xl mx-auto p-4 sm:px-6'>
                    <div className='w-full md:flex md:items-center md:justify-between'>
                        <span className='sm:text-center'>
                            © 2023{" "}
                            <a href='https://github.com/santokhan/' className='hover:underline'>
                                Santo
                            </a>
                            . All Rights Reserved.
                        </span>
                        <ul className='flex flex-wrap gap-4 sm:gap-6 items-center'>
                            <li>
                                <a href='/about/' className='hover:underline'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href='/contact/' className='hover:underline'>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href='/privacy-policy/' className='hover:underline'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href='/terms/' className='hover:underline'>
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
