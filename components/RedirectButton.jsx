import Link from 'next/link'
import { ArrowUp } from 'iconsax-react'

const RedirectButton = ({ redirectURL = '' }) => {
    return (
        <Link
            href={redirectURL}
            className='flex justify-center items-center gap-1 px-4 py-3 rounded-lg bg-button font-medium text-white'
            title='Open Link'
            target='_blank'
        >
            <ArrowUp className='size-6 rotate-45' />
        </Link>
    )
}

export default RedirectButton
