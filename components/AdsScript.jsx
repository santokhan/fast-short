'use client'

import { useEffect, useRef } from 'react'
import Container from './Container'
import { useRouter } from 'next/navigation'

export const AdsF1 = () => {
    const router = useRouter()
    const adsLoaded = useRef(false)

    useEffect(() => {
        const loadAd = () => {
            if (typeof window !== 'undefined' && window.adsbygoogle) {
                window.adsbygoogle = window.adsbygoogle || []
                window.adsbygoogle.push({})
                adsLoaded.current = true
            }
        }

        if (router.query && !adsLoaded.current) {
            setTimeout(loadAd, 0)
        }
    }, [router.query])

    return (
        <Container className='bg-white/20'>
            <ins
                className='adsbygoogle block'
                // style={{ display: 'block' }}
                data-ad-client='ca-pub-4863734906175420'
                data-ad-slot='8798372090'
                data-ad-format='auto'
                data-full-width-responsive='true'
            ></ins>
        </Container>
    )
}
