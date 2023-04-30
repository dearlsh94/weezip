import * as React from 'react'
import '@scss/notion.scss'

interface Props {
  color?: string
  height?: number
}

const Divider = ({ color, height }: Props) => {
  return (
    <div
      className={`block-divider ${color}`}
      style={{
        height: `${height || 1}px`,
      }}
    />
  )
}

export default Divider
