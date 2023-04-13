import * as React from 'react'

interface Props {
  size?: number
  fill?: string
}

// https://icon-sets.iconify.design/lucide/menu/
const IconHamburgerMenu = ({ size = 24, fill = 'black' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16M4 6h16M4 18h16"
      />
    </svg>
  )
}

export default IconHamburgerMenu
