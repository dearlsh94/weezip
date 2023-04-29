import * as React from 'react'
import '@scss/components.scss'
import { TextBlock } from '../../types'
import Paragraph from './Paragraph'

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
