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
    border: 5px dotted green;

    .ace_gutter-active-line {
      background-color: ${(props: ThemeInterface) => props.theme.colors.stroke};
    }
    .ace_gutter-layer {
      background-color: ${(props: ThemeInterface) =>
        props.theme.colors.success};
    }
    .ace_active-line {
      background-color: ${(props: ThemeInterface) => props.theme.colors.stroke};
    }
    * {
      font-family: 'Roboto Mono';
      font-size: 1em;
    }
  }
`
