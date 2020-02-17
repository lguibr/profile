import styled from 'styled-components'
import { Theme } from 'app/@types/theme'

import CoreResizable from 'app/components/core/Resizable'

interface ThemeInterface {
  theme: Theme
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const Resizable = styled(CoreResizable)`
  &&& {
    border: 5px dotted purple;
  }
`

export const Sections = styled.div``
export const FilePointer = styled.div``

export const TreeContainer = styled.div`
  border: 5px dotted purple;
  max-height: calc(100vh - 40px);
  height: 100%;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
`
