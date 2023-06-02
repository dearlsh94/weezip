import * as React from 'react'

interface Props {
  size?: number
  fill?: string
}

// https://icon-sets.iconify.design/ion/list/
const IconList = ({ size = 24, fill = 'black' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        fill={fill}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M160 144h288M160 256h288M160 368h288"
      />
      <circle
        cx="80"
        cy="144"
        r="16"
        fill={fill}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <circle
        cx="80"
        cy="256"
        r="16"
        fill={fill}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <circle
        cx="80"
        cy="368"
        r="16"
        fill={fill}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  )
}

export default IconList
