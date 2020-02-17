import React from 'react'
import { FontOptions } from 'app/@types/theme'

export interface TextProps {
  component?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre'
  children: string | []
}

const Text = ({ component, ...restProps }: TextProps) =>
  React.createElement(component || 'p', restProps)

export default Text
