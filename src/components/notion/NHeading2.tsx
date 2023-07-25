import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import NParagraph from '@components/notion/NParagraph'

interface Props {
  head2?: TextBlock
}

const NHeading2 = ({ head2 }: Props) => {
  return (
    <React.Fragment>
      {head2 && (
        <h2>
          <NParagraph paragraph={head2} />
        </h2>
      )}
    </React.Fragment>
  )
}

export default NHeading2
