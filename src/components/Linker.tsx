import * as React from 'react'
import '../scss/components.scss'

interface Props {
  url: string
  children?: React.ReactNode
  target?: '_blank' | '_parent' | '_self' | '_top'
}

const Linker = ({ url, target, children }: Props) => {
  return (
    <a href={url} target={target} rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Linker
