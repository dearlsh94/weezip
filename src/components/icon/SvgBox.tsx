import * as React from 'react'
import { SVGIcon } from '@types'
import '@scss/components/Icon.scss'

interface Props extends SVGIcon {
  children: React.ReactNode
}

const SvgBox = ({ children, size = 24, color = 'mono', handleClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`weezip ${color}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={handleClick}
    >
      {children}
    </svg>
  )
}

export default SvgBox
