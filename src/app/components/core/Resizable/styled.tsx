import styled from 'styled-components'

interface SeparatorProps {
  resizing: boolean
}

interface ContentProps {
  min: number
  size: number
}

interface ContainerProps {
  min: number
  max: number
  size: number
  direction: 'vertical' | 'horizontal'
}

const handleSeparatorShow = ({ resizing }: SeparatorProps) =>
  resizing ? 'display : flex' : 'display : none'

const handleSize = ({ size, direction }: ContainerProps) =>
  direction === 'horizontal' ? `width: ${size}px` : `height: ${size}px`

const handleContainerSize = ({ size, min, direction }: ContainerProps) =>
  min > size
    ? direction === 'horizontal'
      ? `width: ${2}px`
      : `height: ${2}px`
    : handleSize

const handleShow = ({ min, size }: ContentProps) =>
  min > size && 'display: none;'

const handleMax = ({ max, direction }: ContainerProps) =>
  direction === 'horizontal' ? `max-width: ${max}px` : `max-height: ${max}px`

export const SeparatorHorizontal = styled.div`
  content: '';
  display: flex;
  height: 100%;
  width: 2px;
  cursor: col-resize;
  right: 0px;
  top: 0px;
  position: absolute;
  z-index: 20;

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  &:after {
    content: '';
    position: fixed;
    bottom: 0px;
    left: 0px;
    ${handleSeparatorShow};
    height: 100%;
    width: 100%;
  }
`

export const SeparatorVertical = styled.div`
  content: '';
  display: flex;
  width: 100%;
  height: 2px;
  cursor: row-resize;
  position: absolute;
  z-index: 20;
  top: 0px;
  left: 0px;

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */

  &:after {
    content: '';
    position: fixed;
    bottom: 0px;
    left: 0px;
    ${handleSeparatorShow};
    height: 100%;
    width: 100%;
  }
`

export const Content = styled.div`
  ${handleShow};
`

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  ${handleMax};
  ${handleSize};
  ${handleContainerSize};
`
