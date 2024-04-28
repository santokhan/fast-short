'use client'

import { useRouter } from 'next/navigation'

import { useState } from 'react'

const CopyButton = ({ textToCopy, url = '' }) => {
    const [isCopied, setIsCopied] = useState(false)
    const router = useRouter()

    const handleCopy = () => {
        window.navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
            router.push(url)
        })
    }

    return (
        <div>
            <button
                type='button'
                className={`flex justify-center items-center px-6 py-3 rounded-lg bg-button font-medium text-white ${
                    isCopied ? 'opacity-75' : ''
                }`}
                onClick={handleCopy}
            >
                {isCopied ? 'Copied' : 'Copy'}
            </button>
        </div>
    )
}

export default CopyButton
