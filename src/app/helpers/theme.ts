import { css } from 'styled-components'
import {
  Theme,
  Colors,
  FontStyles,
  Breakpoint,
  FontFamily,
} from 'app/@types/theme'

const fontFamilies: FontFamily = {
  titleDefault: 'Rajdhani, Open Sans',
  roboto: 'Open Sans, Roboto, sans-serif',
  default: 'Roboto Mono',
  fallback: 'Helvetica Neue, Arial, sans-serif',
}

const colors: Colors = {
  primary: '#0d47a1',
  secondary: '#0f1019',
  accent: '#8c0032',

  error: '#D41D5F',
  alert: '#F27468',
  success: '#00d756',

  white: 'red',
  black: '#262E4D',
  background: '#090b0f',
  stroke: '#0a0c12',
}

export const fonts: FontStyles = {
  default: css`
    font-size: clamp(1em, 1.5vw, 1.2em);
    font-weight: initial;
    font-family: ${fontFamilies.default};
    color: white;
  `,
  title: css`
    font-size: clamp(2.5em, 2vw, 5em);
    color: '#9396a4';
  `,
  filePointer: css`
    font-size: clamp(9px, 15vw, 1em);
    font-family: ${fontFamilies.roboto};
    color: '#9396a4';
  `,
}

const breakpoints: Breakpoint = {
  xxSmall: 320,
  xSmall: 425,
  small: 600,
  medium: 1024,
  large: 1280,
  xLarge: 1600,
  xxLarge: 1920,
}

const theme: Theme = {
  colors,
  fonts,
  breakpoints,
}

export default theme
