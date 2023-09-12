import * as React from 'react'
import '@scss/components/ui/Divider.scss'

interface Props {
  color?: string
  height?: number
}

const Divider = ({ color, height }: Props) => {
  return (
    <hr
      className={`block-divider ${color}`}
      style={{
        height: `${height || 1}px`,
      }}
    />
  )
}

export default Divider
