const { default: Script } = require('next/script')

const PlaceAds = () => {
    return <Script id='ad-script'>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
}

const AdsF1 = () => {
    return (
        <div className='adsF1'>
            <ins
                className='adsbygoogle'
                style={{ display: 'block' }}
                data-ad-client='ca-pub-4863734906175420'
                data-ad-slot='8798372090'
                data-ad-format='auto'
                data-full-width-responsive='true'
            ></ins>
        </div>
    )
}

export { AdsF1 }
export default PlaceAds
