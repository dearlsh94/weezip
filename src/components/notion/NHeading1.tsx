import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock } from '@types'
import { NParagraph } from '@components/notion'

interface Props {
  head1?: TextBlock
}

const NHeading1 = ({ head1 }: Props) => {
  return (
    <>
      {head1 && (
        <h1>
          <NParagraph paragraph={head1} />
        </h1>
      )}
    </>
  )
}

export default NHeading1
