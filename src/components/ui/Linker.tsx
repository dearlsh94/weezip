import * as React from 'react'
import '@scss/components/ui/Linker.scss'

interface Props {
  url: string
  children?: React.ReactNode
  target?: '_blank' | '_parent' | '_self' | '_top'
  className?: string
}

const Linker = ({ url, target, children, className }: Props) => {
  return (
    <a href={url} target={target} rel="noopener noreferrer" className={`my-linker ${className}`}>
      {children}
    </a>
  )
}

export default Linker
