import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import Paragraph from '@components/notion/Paragraph'

interface Props {
  head1?: TextBlock
}

const Heading1 = ({ head1 }: Props) => {
  return (
    <React.Fragment>
      {head1 && (
        <h1>
          <Paragraph paragraph={head1} />
        </h1>
      )}
    </React.Fragment>
  )
}

export default Heading1
