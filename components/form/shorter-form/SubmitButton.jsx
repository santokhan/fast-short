import React from 'react'

const SubmitButton = ({ loading = false }) => {
    return (
        <button
            type='submit'
            className='px-6 py-4 rounded-lg w-full bg-button text-white font-bold'
            title='Shorten URL'
        >
            {loading ? 'Loading...' : 'Shorten URL'}
        </button>
    )
}

export default SubmitButton
