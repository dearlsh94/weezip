import * as React from 'react'
import '../scss/components.scss'
import Paragraph from './Paragraph'
import { Children } from '../types'

interface Props {
  numberedListItem: Children
}

const MyNumberedListItem = ({ numberedListItem }: Props) => {
  return (
    <React.Fragment>
      <div className={`block-numbered-list`}>
        <Paragraph paragraph={numberedListItem.numbered_list_item} />
      </div>
    </React.Fragment>
  )
}

export default MyNumberedListItem
