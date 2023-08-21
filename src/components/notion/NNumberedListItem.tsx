import * as React from 'react'
import '@scss/notion.scss'
import { NParagraph } from '@components/notion'
import { Children } from '@types'
import ContentWrapper from '@module/ContentWrapper'

interface Props {
  numberedListItem: Children
}

const NNumberedListItem = ({ numberedListItem }: Props) => {
  const { has_children, children } = numberedListItem
  return (
    <>
      <div className={`block-numbered-list-item`}>
        <NParagraph paragraph={numberedListItem.numbered_list_item} />
        {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
      </div>
    </>
  )
}

export default NNumberedListItem
