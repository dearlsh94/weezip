import * as React from 'react'

interface Props {
  direction: 'top' | 'right' | 'left' | 'bottom'
  size?: number
  fill?: string
}

const IconMoveEnd = ({ direction = 'top', size = 24, fill = 'black' }: Props) => {
  const getRotateDegree = () => {
    switch (direction) {
      case 'top':
        return 0
      case 'right':
        return 90
      case 'left':
        return 270
      case 'bottom':
        return 180
      default:
        return 0
    }
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
      <g transform={`rotate(${getRotateDegree()} 8 8)`}>
        <path
          fill={fill}
          d="M3 2.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 2.25Zm5.53 2.97l3.75 3.75a.749.749 0 1 1-1.06 1.06L8.75 7.561v6.689a.75.75 0 0 1-1.5 0V7.561L4.78 10.03a.749.749 0 1 1-1.06-1.06l3.75-3.75a.749.749 0 0 1 1.06 0Z"
        />
      </g>
    </svg>
    // <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    //   <g transform={`rotate(${getRotateDegree()} 12 12)`}>
    //     <path
    //       fill={fill}
    //       d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
    //     />
    //   </g>
    // </svg>
  )
}

export default IconMoveEnd
