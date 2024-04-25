'use client'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export const LoginButton = ({ transparent = false }) => {
  const isAuthenticated = false

  return isAuthenticated ? (
    <button
      type='button'
      onClick={() => {
        logout()
        redirect('/auth/signin')
      }}
      className={twMerge(
        'px-6 py-2 rounded-full font-medium',
        transparent ? 'text-gray-50 hover:bg-white/10' : 'text-gray-900 hover:bg-black/10'
      )}
    >
      Sign Out
    </button>
  ) : (
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
