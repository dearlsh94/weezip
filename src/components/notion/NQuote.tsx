import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import { NParagraph } from '@components/notion'

interface NQuoteProps {
  quote?: TextBlock
}

export default function NQuote({ quote }: NQuoteProps) {
  return (
    <>
      {quote && (
        <blockquote className={`block-quote`}>
          <NParagraph paragraph={quote} />
        </blockquote>
      )}
    </>
  )
}
