import * as React from 'react'
import { useEffect, useState } from 'react'

interface Props {
  direction: 'top' | 'right' | 'left' | 'bottom'
  size?: number
  fill?: string
}

const IconArrow = ({ direction = 'top', size = 24, fill = 'black' }: Props) => {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    switch (direction) {
      case 'top':
        setRotate(90)
        break
      case 'right':
        setRotate(180)
        break
      case 'left':
        setRotate(0)
        break
      case 'bottom':
        setRotate(270)
        break
      default:
        setRotate(0)
        break
    }
  }, [direction])
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g transform={`rotate(${rotate} 12 12)`}>
        <path
          fill={fill}
          d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
        />
      </g>
    </svg>
  )
}

export default IconArrow
