import * as React from 'react'
import '@scss/components.scss'
import ReactMarkdown from 'react-markdown'

interface Props {
  md: string
}

const ContentChildren = ({ md }: Props) => {
  return <ReactMarkdown>{md}</ReactMarkdown>
}

export default ContentChildren
