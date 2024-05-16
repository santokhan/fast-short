'use server'

// Redirect page for the URL shortener

import NavbarSpace from '@/components/NavbarSpace'
import getURL from '@/actions/query/getURL'
import { permanentRedirect } from 'next/navigation'
import Section from '@/components/Section'

const Redirect = async ({ params }) => {
    if (params) {
        const res = await getURL(params.id)

        if (res) {
            permanentRedirect(res.URL)
        }
    } else {
        return (
            <div className='min-h-screen'>
                <NavbarSpace />
                <Section>
                    {JSON.stringify(params)}
                    <div>Redirect Page</div>
                </Section>
            </div>
        )
    }

}

export default Redirect