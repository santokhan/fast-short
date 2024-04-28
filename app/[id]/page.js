'use server'

// Redirect page for the URL shortener

import NavbarSpace from '@/components/NavbarSpace'
import Container from '@/components/Container'
import getURL from '@/actions/query/getURL'
import { permanentRedirect } from 'next/navigation'

const Redirect = async ({ params }) => {
    if (params) {
        const res = await getURL(params.id)

        permanentRedirect(res.URL)
    } else {
        return (
            <div className='min-h-screen'>
                <NavbarSpace />
                <Container className="py-8">
                    {JSON.stringify(params)}
                    <div>Redirect Page</div>
                </Container>
            </div>
        )
    }

}

export default Redirect