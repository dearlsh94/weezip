import * as React from 'react'
import '@scss/components/ui/Linker.scss'
import { Link, navigate } from 'gatsby'
import { MouseEvent } from 'react'

interface Props {
  url: string
  children?: React.ReactNode
  target?: '_blank' | '_parent' | '_self' | '_top'
  className?: string
}

const Linker = ({ url, target, children, className }: Props) => {
  return (
    <>
      {url.startsWith('https://') && !url.startsWith('https://weezip.treefeely.com') ? (
        <a href={url} target={target} rel="noopener noreferrer" className={`my-linker ${className || ''}`}>
          {children}
        </a>
      ) : (
        <Link to={url} className={`my-linker ${className || ''}`}>
          {children}
        </Link>
      )}
    </>
  )
}

export default Linker
