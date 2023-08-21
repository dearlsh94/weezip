import * as React from 'react'
import '@scss/notion.scss'
import { NParagraph } from '@components/notion'
import { Children } from '@types'
import ContentWrapper from '@module/ContentWrapper'

interface Props {
  bulletedListItem: Children
}

const NBulletedList = ({ bulletedListItem }: Props) => {
  const { has_children, children } = bulletedListItem

  return (
    <>
      <NParagraph paragraph={bulletedListItem.bulleted_list_item} />
      {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
    </>
  )
}

export default NBulletedList
