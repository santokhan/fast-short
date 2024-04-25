import { navList } from '@/utils/navbar'
import React, { Fragment } from 'react'
import { NavItem } from './NavItem'
import { NavDropdownButton } from './Dropdown'

export const NavList = ({ transparent }) => {
  return (
    <ul className='flex items-center justify-center gap-1'>
      {navList.map((nav, i) => {
        const { label, to, icon, children } = nav
        return (
          <Fragment key={i}>
            {children ? (
              <NavDropdownButton label={label} transparent={transparent}>
                {/* <Dropdown /> */}
              </NavDropdownButton>
            ) : (
              <NavItem label={label} to={to} transparent={transparent} />
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default NavList
