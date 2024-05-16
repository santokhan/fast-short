'use client'

import Section from '@/components/Section'
import { User } from 'iconsax-react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function UserInfoSide() {
    const { status, data, update, error } = useSession()

    const user = data?.user

    return (
        <>
            <div className='flex flex-col items-center p-6'>
                <div className='size-16'>
                    <User className='w-full h-full text-button' />
                </div>
                <h5 className='font-semibold text-button mt-4'>{user?.name}</h5>
                <p className='font-medium text-button text-xs mt-1'>{user?.email}</p>
            </div>
            <div className='font-medium flex items-center rounded-lg py-2 px-5 text-button my-2'>Wallet: {'$0.00'}</div>
        </>
    )
}
