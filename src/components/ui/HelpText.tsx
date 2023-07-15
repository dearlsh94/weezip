import * as React from 'react'
import '@scss/components/ui/HelpText.scss'

interface Props {
  text: string
  className?: string
}

const HelpText = ({ text, className }: Props) => {
  return <strong className={`my-help-text ${className || ''}`}>🧚 {text}</strong>
}

export default HelpText
