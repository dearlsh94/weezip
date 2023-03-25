import * as React from 'react'
import '../scss/components.scss'

interface Props {
  title?: string
}

const MyHead = ({ title }: Props) => {
  return <title>WeeZip{title ? ` | ${title}` : ''}</title>
}

export default MyHead
