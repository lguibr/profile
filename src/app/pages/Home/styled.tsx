import styled from 'styled-components'

import { Theme } from 'app/@types/theme'

interface ThemeInterface {
  theme: Theme
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  box-sizing: border-box;
`
export const BreadCrumb = styled.div`
  border: 1px solid ${({ theme }: ThemeInterface) => theme.colors.stroke};
  width: 100%;
  height: 1.2em;
`
export const FileContainer = styled.div`
  background: ${({ theme }: ThemeInterface) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  display: flex;
`

export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  height: calc(100% - 40px);

  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
`

export const Container = styled.div`
  background: ${({ theme }: ThemeInterface) => theme.colors.background};
  grid-template-rows: min-content 1fr;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`
