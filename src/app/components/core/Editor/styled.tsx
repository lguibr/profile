import styled from 'styled-components'

import { Theme } from 'app/@types/theme'

interface ThemeInterface {
  theme: Theme
}

export const Container = styled.div`
  &&& {
    display: flex;
    box-sizing: border-box;
    height: 100%;
    width: 100%;

    .ace_gutter-active-line {
      background-color: ${(props: ThemeInterface) =>
        props.theme.colors.editorBackgroundFocus};
    }
    .ace_gutter-layer {
      background-color: ${(props: ThemeInterface) =>
        props.theme.colors.editorBackground};
    }
    .ace_active-line {
      background-color: ${(props: ThemeInterface) =>
        props.theme.colors.editorBackgroundFocus};
    }

    * {
      font-family: 'Roboto Mono';
      font-size: 1em;
    }

    .ace_content {
      background-color: ${(props: ThemeInterface) =>
        props.theme.colors.editorBackground};
    }
    .ace_scrollbar {
      ::-webkit-scrollbar {
        background: ${(props: ThemeInterface) =>
          props.theme.colors.editorBackground};
      }
      ::-webkit-scrollbar-thumb {
        background: ${(props: ThemeInterface) => props.theme.colors.scroll};
      }
    }
  }
`
