'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { signOut } from 'next-auth/react'

export const LoginButton = ({ transparent = false }) => {
    const { status } = useSession()

    const onSignOut = () => {
        signOut({ callbackUrl: '/auth/signin' })
    }

    if (status === 'loading') {
        return 'Loading...'
    } else {
        if (status === 'authenticated') {
            return (
                <button
                    type='button'
                    onClick={onSignOut}
                    className={twMerge(
                        'px-6 py-2 rounded-full font-medium',
                        transparent ? 'text-gray-50 hover:bg-white/10' : 'text-gray-900 hover:bg-black/10'
                    )}
                >
                    Sign Out
                </button>
            )
        } else {
            return (
                <Link
                    href={'/auth/signin'}
                    className={twMerge(
                        'px-6 py-2 rounded-full font-medium',
                        transparent ? 'text-gray-50 hover:bg-white/10' : 'text-gray-900 hover:bg-black/10'
                    )}
                >
                    Sign In
                </Link>
            )
        }
    }
}
