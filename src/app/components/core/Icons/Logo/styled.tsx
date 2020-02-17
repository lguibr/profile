import styled from 'styled-components'

interface ContainerProps {
  height: number
}

const handleHeight = ({ height }: ContainerProps) => height

export const Container = styled.div`
  display: flex;
  padding: 0.2em;

  svg {
    height: ${handleHeight}px;
  }
`
