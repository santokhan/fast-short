'use client'
import React from 'react'
import Logo from '@/components/Logo'
import NavList from './NavList'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { LoginButton } from './LoginButton'

const NavBar = ({ className = '', transparent = false }) => {
    const [scrollY, setScrollY] = React.useState(0)
    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClass = twMerge(
        'fixed top-0 z-[2] flex h-16 w-full items-center transition-colors duration-200',
        scrollY > 0 ? 'bg-gray-100 backdrop-blur-lg' : '',
        className
    )
    return (
        <nav className={navClass}>
            <div className='mx-auto flex w-full max-w-screen-xl flex-1 items-center justify-between px-4 h-full'>
                <div className='md:w-2/12 flex-shrink-0 flex'>
                    <Link href='/' className='router-link-active router-link-exact-active'>
                        <Logo />
                    </Link>
                </div>
                <div className='hidden flex-grow lg:block'>
                    <NavList transparent={transparent} />
                </div>
                <div className='hidden md:w-2/12 flex-shrink-0 lg:flex justify-end'>
                    <LoginButton transparent={transparent} />
                </div>
                <div className='flex items-center justify-center lg:hidden'>
                    <button
                        type='button'
                        className={twMerge('', transparent ? 'text-gray-300 hover:text-gray-50' : 'text-secondary-900')}
                        title='Toggle'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            className='h-8 w-8'
                        >
                            <path
                                fillRule='evenodd'
                                d='M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
