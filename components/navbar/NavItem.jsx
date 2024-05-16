import { twMerge } from 'tailwind-merge'

export const NavLabel = ({ label }) => {
    return <span className='whitespace-nowrap'>{label}</span>
}

export const NavItem = ({ label, to, transparent = false }) => {
    return (
        <li className=''>
            <a
                href={to}
                className={twMerge(
                    'py-2.5 px-4 lg:px-5 rounded-full',
                    'font-semibold text-secondary-900',
                    'hover:underline decoration-2 underline-offset-4'
                    // transparent ? 'text-gray-200 hover:bg-white/5' : 'text-secondary-900 hover:bg-black/10'
                )}
            >
                <NavLabel label={label} />
            </a>
        </li>
    )
}
