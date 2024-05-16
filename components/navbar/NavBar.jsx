'use client'

import React, { useEffect, useState } from 'react'
import Logo from '@/components/Logo'
import NavList from './NavList'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { LoginButton } from './LoginButton'
import AuthProvider from '@/context/AuthContext'
import { CloseCircle } from 'iconsax-react'
import { Transition } from '@headlessui/react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'

const FloatingNavigation = ({ transparent = false }) => {
    const [state, setState] = useState(false)

    return (
        <>
            <button
                onClick={() => {
                    setState(true)
                }}
                type='button'
                className={twMerge('', transparent ? 'text-gray-300 hover:text-gray-50' : 'text-secondary-900')}
                title='Toggle'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    className='size-8'
                >
                    <path
                        fillRule='evenodd'
                        d='M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                        clipRule='evenodd'
                    />
                </svg>
            </button>
            {createPortal(
                <Transition
                    show={state}
                    enter='transition-opacity duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity duration-150'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed h-screen top-0 left-0 right-0 bg-white p-4 lg:p-6 text-lg z-[3]'>
                        <div className='flex justify-between items-center gap-6'>
                            <Link href='/' className=''>
                                <Logo />
                            </Link>
                            <button type='button' className='size-6' onClick={() => setState(false)}>
                                <CloseCircle className='' />
                            </button>
                        </div>
                        <NavList transparent={transparent} className='flex-col gap-4 mt-8' />
                        <div className='flex justify-center mt-6'>
                            <AuthProvider>
                                <LoginButton transparent={transparent} />
                            </AuthProvider>
                        </div>
                    </div>
                </Transition>,
                window.document.body
            )}
        </>
    )
}

const NavBar = ({ className = '', transparent = false, fluid = false }) => {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
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
            <div
                className={twMerge(
                    'flex w-full flex-1 items-center justify-between px-4 h-full',
                    fluid ? 'w-full' : 'max-w-screen-xl w-full mx-auto',
                    className || ''
                )}
            >
                <div className='md:w-2/12 flex-shrink-0 flex'>
                    <Link href='/' className='router-link-active router-link-exact-active'>
                        <Logo />
                    </Link>
                </div>
                <div className='hidden flex-grow lg:block'>
                    <NavList transparent={transparent} className='flex-row gap-2 justify-center' />
                </div>
                <div className='hidden md:w-2/12 flex-shrink-0 lg:flex justify-end'>
                    <AuthProvider>
                        <LoginButton transparent={transparent} />
                    </AuthProvider>
                </div>
                <div className='flex items-center justify-center lg:hidden'>
                    <FloatingNavigation transparent={transparent} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
