import * as React from 'react'
import { SVGIcon } from '@types'
import '@scss/components/Icon.scss'

interface Props extends SVGIcon {
  viewBox?: string
  children: React.ReactNode
}

const SvgBox = ({ size = 24, color = 'mono', handleClick, children, viewBox = '0 0 24 24' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`weezip ${color} ${handleClick ? 'pointer' : ''}`}
      width={size}
      height={size}
      viewBox={viewBox}
      onClick={handleClick}
    >
      {children}
    </svg>
  )
}

export default SvgBox
