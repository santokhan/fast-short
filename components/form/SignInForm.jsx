'use client'

import React from 'react'

const GoogleSignInForm = ({ onSignIn }) => {
    return (
        <div className='relative mx-auto max-w-[525px] overflow-hidden rounded-xl bg-white p-6 lg:p-8 text-center space-y-8'>
            <div className='text-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Sign In</h1>
            </div>
            <div className='space-y-4'>
                <p className='text-base text-gray-700'>Connect With</p>
                <button
                    type='button'
                    onClick={onSignIn}
                    className='w-full flex h-11 items-center justify-center rounded-md bg-button hover:bg-opacity-90'
                    title='Sign In With Google'
                >
                    <svg className='size-6' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z'
                            fill='white'
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default GoogleSignInForm
