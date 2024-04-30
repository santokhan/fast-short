import Script from 'next/script'

const GoogleTag = () => {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script async src='https://www.googletagmanager.com/gtag/js?id=G-L1YXJ15Q1T' />
            <Script async src='/google-tag.js' />
        </>
    )
}

export default GoogleTag
