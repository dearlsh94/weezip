import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import { NParagraph } from '@components/notion'

interface Props {
  quote?: TextBlock
}

const NQuote = ({ quote }: Props) => {
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

export default NQuote
