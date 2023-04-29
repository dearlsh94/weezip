import * as React from 'react'
import '@scss/components.scss'
import { TextBlock } from '../@types'
import Paragraph from './Paragraph'

interface Props {
  head2?: TextBlock
}

const Heading2 = ({ head2 }: Props) => {
  return (
    <React.Fragment>
      {head2 && (
        <h2>
          <Paragraph paragraph={head2} />
        </h2>
      )}
    </React.Fragment>
  )
}

export default Heading2
