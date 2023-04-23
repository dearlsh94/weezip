import * as React from 'react'

interface Props {
  size?: number
  fill?: string
  handleClick?: Function
}

// https://icon-sets.iconify.design/pajamas/clear-all/
const IconClearAll = ({ size = 24, fill = 'black', handleClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      onClick={() => {
        handleClick && handleClick()
      }}
    >
      <path
        fill={fill}
        fill-rule="evenodd"
        d="M15.963 7.23A8 8 0 0 1 .044 8.841a.75.75 0 0 1 1.492-.158a6.5 6.5 0 1 0 9.964-6.16V4.25a.75.75 0 0 1-1.5 0V0h4.25a.75.75 0 0 1 0 1.5h-1.586a8.001 8.001 0 0 1 3.299 5.73ZM7 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2.25.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM1.5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

export default IconClearAll
