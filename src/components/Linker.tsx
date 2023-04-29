import * as React from 'react'
import '@scss/components.scss'

interface Props {
  url: string
  children?: React.ReactNode
  target?: '_blank' | '_parent' | '_self' | '_top'
  className?: ''
}

const Linker = ({ url, target, children, className }: Props) => {
  return (
    <a href={url} target={target} rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export default Linker
