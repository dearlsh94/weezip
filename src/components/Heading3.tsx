import * as React from 'react'
import '../scss/components.scss'
import { TextBlock } from '../types'
import Paragraph from './Paragraph'

interface Props {
  head3?: TextBlock
}

const Heading3 = ({ head3 }: Props) => {
  return (
    <React.Fragment>
      {head3 && (
        <h3>
          <Paragraph paragraph={head3} />
        </h3>
      )}
    </React.Fragment>
  )
}

export default Heading3
