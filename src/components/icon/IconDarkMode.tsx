import * as React from 'react'

interface Props {
  size?: number
  fill?: string
  handleClick: React.MouseEventHandler<SVGSVGElement>
}

// https://icon-sets.iconify.design/ic/round-dark-mode/
const IconDarkMode = ({ size = 24, fill = 'black', handleClick }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" onClick={handleClick}>
      <path
        fill={fill}
        d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
      />
    </svg>
  )
}

export default IconDarkMode
