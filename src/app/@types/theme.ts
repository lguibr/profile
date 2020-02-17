import { FlattenSimpleInterpolation } from 'styled-components'

type FontFamilyOptions = 'roboto' | 'default' | 'fallback' | 'titleDefault'

type ColorOptions =
  | 'alert'
  | 'white'
  | 'black'
  | 'error'
  | 'accent'
  | 'stroke'
  | 'primary'
  | 'success'
  | 'secondary'
  | 'background'

type BreakpointsOptions =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'

export type FontOptions = 'title' | 'default' | 'filePointer'

export type FontFamily = {
  [fontFamily in FontFamilyOptions]: string
}

export type FontStyles = {
  [font in FontOptions]: FlattenSimpleInterpolation
}

export type Colors = {
  [color in ColorOptions]: string
}

export type Breakpoint = {
  [breakpoint in BreakpointsOptions]: number
}

export type Theme = {
  colors: Colors
  fonts: FontStyles
  breakpoints: Breakpoint
}
