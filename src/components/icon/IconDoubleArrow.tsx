import * as React from 'react'
import { useEffect, useState } from 'react'

interface Props {
  direction: 'top' | 'right' | 'left' | 'bottom'
  size?: number
  fill?: string
}

const IconDoubleArrow = ({ direction = 'top', size = 24, fill = 'black' }: Props) => {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    switch (direction) {
      case 'top':
        setRotate(270)
        break
      case 'right':
        setRotate(0)
        break
      case 'left':
        setRotate(180)
        break
      case 'bottom':
        setRotate(90)
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
          d="M5.7 17.3q-.275-.275-.275-.7t.275-.7L9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3Zm6.6 0q-.275-.275-.275-.7t.275-.7l3.875-3.9L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3Z"
        />
      </g>
    </svg>
  )
}

export default IconDoubleArrow
