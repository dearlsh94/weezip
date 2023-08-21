import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import { NParagraph } from '@components/notion'

interface Props {
  head3?: TextBlock
}

const NHeading3 = ({ head3 }: Props) => {
  return (
    <>
      {head3 && (
        <h3>
          <NParagraph paragraph={head3} />
        </h3>
      )}
    </>
  )
}

export default NHeading3
