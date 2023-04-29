import * as React from 'react'
import '@scss/components.scss'
import { TextBlock } from '@types'
import Paragraph from '@components/notion/Paragraph'

interface Props {
  quote?: TextBlock
}

const MyQuote = ({ quote }: Props) => {
  return (
    <React.Fragment>
      {quote && (
        <blockquote className={`block-quote`}>
          <Paragraph paragraph={quote} />
        </blockquote>
      )}
    </React.Fragment>
  )
}

export default MyQuote
