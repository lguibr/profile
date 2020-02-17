import React from 'react'

import Resizable from 'app/components/core/Resizable'

export type TerminalProps = {}

const Terminal: React.FC<TerminalProps> = ({}) => {
  return (
    <Resizable min={100} initial={300} max={400} direction="vertical">
      <h1>teste</h1>
    </Resizable>
  )
}

export default Terminal
