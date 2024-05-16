import { navList } from '@/utils/navbar'
import React, { Fragment } from 'react'
import { NavItem } from './NavItem'
import { NavDropdownButton } from './Dropdown'
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'

export const NavList = ({ transparent, className = '' }) => {
    const pathName = usePathname()

    return (
        <ul className={twMerge('flex', className)}>
            {navList.map((nav, i) => {
                const { label, to, icon, children } = nav
                return (
                    <Fragment key={i}>
                        {children ? (
                            <NavDropdownButton label={label} transparent={transparent}>
                                {/* <Dropdown /> */}
                            </NavDropdownButton>
                        ) : (
                            <NavItem label={label} to={to} transparent={transparent} active={pathName === to} />
                        )}
                    </Fragment>
                )
            })}
        </ul>
    )
}

export default NavList
