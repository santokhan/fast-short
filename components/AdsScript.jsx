'use client'

import { useEffect } from 'react'
import Container from './Container'

export const AdsF1 = () => {
    useEffect(() => {
        try {
            window.adsbygoogle = window.adsbygoogle || []
            window.adsbygoogle.push({})
        } catch (error) {
            console.error(error)
        }
    }, [])
    return (
        <Container className='bg-white/20'>
            <ins
                className='adsbygoogle'
                style={{ display: 'block' }}
                data-ad-client='ca-pub-4863734906175420'
                data-ad-slot='8798372090'
                data-ad-format='auto'
                data-full-width-responsive='true'
            ></ins>
        </Container>
    )
}
