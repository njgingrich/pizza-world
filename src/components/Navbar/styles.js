import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles'

const Nav = styled.nav`
  height: 56px;
  width: 100%;
  background-color: ${theme.colors.red};
`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  list-style-type: none;
`

const NavItem = styled.li`
  padding: 0.5rem 1rem;
`

const NavLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1;
  text-decoration: none;

  :visited, :active {
    color: ${theme.colors.white};
  }
`

export { Nav, NavList, NavItem, NavLink }