import React, { useState, useRef, useEffect } from 'react'
import {
  Container,
  Content,
  SeparatorVertical,
  SeparatorHorizontal,
} from './styled'
import { ReactNode } from 'src/app/@types/reactNode'

export type ResizableProps = {
  direction: 'vertical' | 'horizontal'
  children: ReactNode
  min: number
  max: number
  initial: number
}

const Resizable: React.FC<ResizableProps> = ({
  children,
  min,
  max,
  initial,
  direction = 'horizontal',
}) => {
  const separatorRef: React.RefObject<HTMLDivElement> = useRef(null)

  const [resizing, setResizing] = useState(false)

  const [previousPosition, setPreviousPosition] = useState(0)

  const [currentPosition, setCurrentPosition] = useState(0)

  const [size, setSize] = useState(initial)

  const handleMouseDown = () => {
    setResizing(true)
  }
  const handleMouseUp = () => {
    setResizing(false)
  }
  const handleMouseLeave = () => {
    setResizing(false)
  }

  const handleMouseMove = (event: MouseEvent) => {
    direction === 'horizontal'
      ? setCurrentPosition(event.clientX)
      : setCurrentPosition(-event.clientY)
  }

  useEffect(() => {
    separatorRef.current?.addEventListener('mousedown', handleMouseDown)
    separatorRef.current?.addEventListener('mouseup', handleMouseUp)
    separatorRef.current?.addEventListener('mouseleave', handleMouseLeave)
    separatorRef.current?.addEventListener('mousemove', handleMouseMove)
    return () => {
      separatorRef.current?.removeEventListener('mousedown', handleMouseDown)
      separatorRef.current?.removeEventListener('mouseup', handleMouseUp)
      separatorRef.current?.removeEventListener('mouseleave', handleMouseLeave)
      separatorRef.current?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [separatorRef])

  useEffect(() => {
    if (resizing) {
      if (previousPosition) {
        const delta = currentPosition - previousPosition

        setSize(previous => previous + delta)
      }

      setPreviousPosition(currentPosition)
    }
  }, [currentPosition])

  return (
    <Container min={min} max={max} size={size} direction={direction}>
      {direction === 'horizontal' ? (
        <SeparatorHorizontal resizing={resizing} ref={separatorRef} />
      ) : (
        <SeparatorVertical resizing={resizing} ref={separatorRef} />
      )}
      <Content min={min} size={size}>
        {children}
      </Content>
    </Container>
  )
}

export default Resizable
