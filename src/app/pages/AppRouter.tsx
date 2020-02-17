import React, { useState } from 'react'
import { Router } from '@reach/router'

import Home from './Home'

import { useFile } from 'app/hooks/file'

const AppRouter = () => {
  const [value, setValue] = useState('README.md')
  const handleEditorValue = (value: string) => {
    setValue(value)
  }
  return (
    <Router>
      <Home handleEditorValue={handleEditorValue} value={value} path='/' />
    </Router>
  )
}
export default AppRouter
