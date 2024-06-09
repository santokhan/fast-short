'use client'
import { useState } from 'react'

const CopyButton = ({ url = '' }) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        window.navigator.clipboard.writeText(url).then(() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        })
    }

    return (
        <button
            type='button'
            className={`flex justify-center items-center px-5 py-3 rounded-lg bg-button font-medium text-white ${
                isCopied ? 'opacity-75' : ''
            }`}
            onClick={handleCopy}
        >
            {isCopied ? 'Copied' : 'Copy'}
        </button>
    )
}

export default CopyButton
