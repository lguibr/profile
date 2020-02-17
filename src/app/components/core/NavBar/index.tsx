import React from 'react'
import { ReactNode } from 'app/@types/reactNode'

import { Container } from './styled'

interface NavBarProps {
  children: ReactNode
}

const NavBar = (props: NavBarProps) => {
  const { children } = props
  return <Container>{children}</Container>
}

export default NavBar
