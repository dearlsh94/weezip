import * as React from 'react'

interface Props {
  size?: number
  fill?: string
  handleClick?: React.MouseEventHandler<SVGSVGElement>
}

// https://icon-sets.iconify.design/pajamas/clear-all/
const IconClearAll = ({ size = 24, fill = 'black', handleClick }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" onClick={handleClick}>
      <path
        fill={fill}
        d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
      />
    </svg>
  )
}

export default IconClearAll
