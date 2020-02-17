import React from 'react'

import { Container } from './styled'

export type CloseDirectoryProps = { height: number }

const CloseDirectory: React.FC<CloseDirectoryProps> = ({ height }) => (
  <Container height={height}>
    <svg
      aria-hidden='true'
      data-prefix='fas'
      data-icon='folder'
      role='img'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z'
      ></path>
    </svg>
  </Container>
)

export default CloseDirectory
