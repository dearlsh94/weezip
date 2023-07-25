import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import NParagraph from '@components/notion/NParagraph'

interface Props {
  head3?: TextBlock
}

const NHeading3 = ({ head3 }: Props) => {
  return (
    <React.Fragment>
      {head3 && (
        <h3>
          <NParagraph paragraph={head3} />
        </h3>
      )}
    </React.Fragment>
  )
}

export default NHeading3
