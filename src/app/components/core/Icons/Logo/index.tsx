import React from 'react'

import { Container } from './styled'

export type LogoProps = { height: number }

const Logo: React.FC<LogoProps> = ({ height }) => (
  <Container height={height}>
    <svg viewBox='0 0 24 24' aria-hidden='true' role='presentation'>
      <path
        fill='#0e92cc'
        d='M32 3.333v25.333l-8 3.333-24-7.333v-0.748l24 2.060v-25.979zM1.333 17.481l4.513-4.148-4.513-4.148 1.891-1.103 4.58 3.451 8.196-7.533 4 1.941v14.784l-4 1.941-8.196-7.533-4.579 3.452zM10.192 13.333l5.808 4.377v-8.755z'
      />
    </svg>
  </Container>
)

export default Logo
