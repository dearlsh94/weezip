import * as React from 'react'
import '@scss/components/ui/Linker.scss'
import { Link } from 'gatsby'

interface Props {
  url: string
  children?: React.ReactNode
  target?: '_blank' | '_parent' | '_self' | '_top'
  className?: string
  isUnderline?: boolean
}

const Linker = ({ url, target, children, className, isUnderline = false }: Props) => {
  return (
    <React.Fragment>
      {url.startsWith('https://') && !url.startsWith('https://weezip.treefeely.com') ? (
        <a
          href={url}
          target={target}
          rel="noopener noreferrer"
          className={`my-linker ${className || ''} ${isUnderline ? 'underline' : ''}`}
        >
          {children}
        </a>
      ) : (
        <Link to={url} className={`my-linker ${className || ''} ${isUnderline ? 'underline' : ''}`}>
          {children}
        </Link>
      )}
    </React.Fragment>
  )
}

export default Linker
