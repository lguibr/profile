import styled from 'styled-components'
import { Theme, FontOptions } from 'app/@types/theme'

import TextComponent from './text'

interface TextInterface {
  variant?: FontOptions
  theme: Theme
}

const Text = styled(TextComponent)`
  margin: 0px;
  padding: 0px;

  ${({ theme }: TextInterface) => theme.fonts.default}
  ${({ variant, theme }: TextInterface) => variant && theme.fonts[variant]}
`

export default Text
