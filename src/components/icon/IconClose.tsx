import * as React from 'react'

interface Props {
  size?: number
  fill?: string
  handleClick: React.MouseEventHandler<SVGSVGElement>
}

// https://icon-sets.iconify.design/ion/close/
const IconClose = ({ size = 24, fill = 'black', handleClick }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" onClick={handleClick}>
      <path
        fill={fill}
        d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
      />
    </svg>
  )
}

export default IconClose
