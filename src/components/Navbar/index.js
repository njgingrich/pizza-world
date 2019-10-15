import React from 'react'

import { Nav, NavList, NavItem, NavLink } from './styles'

export default function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/order">Order</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  )
}
