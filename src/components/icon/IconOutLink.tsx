import * as React from 'react'

interface Props {
  size?: number
  fill?: string
}

// https://icon-sets.iconify.design/eva/external-link-outline/
const IconOutLink = ({ size = 24, fill = 'black' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="evaExternalLinkOutline0">
        <g id="evaExternalLinkOutline1">
          <g id="evaExternalLinkOutline2" fill={fill}>
            <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Z" />
            <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2Z" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default IconOutLink
