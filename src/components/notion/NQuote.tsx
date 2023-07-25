import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import NParagraph from '@components/notion/NParagraph'

interface Props {
  quote?: TextBlock
}

const NQuote = ({ quote }: Props) => {
  return (
    <React.Fragment>
      {quote && (
        <blockquote className={`block-quote`}>
          <NParagraph paragraph={quote} />
        </blockquote>
      )}
    </React.Fragment>
  )
}

export default NQuote
