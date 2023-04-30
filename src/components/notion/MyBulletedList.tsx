import * as React from 'react'
import '@scss/notion.scss'
import Paragraph from '@components/notion/Paragraph'
import { Children } from '@types'
import ContentWrapper from '@module/ContentWrapper'

interface Props {
  bulletedListItem: Children
}

const MyBulletedList = ({ bulletedListItem }: Props) => {
  const { has_children, children } = bulletedListItem

  return (
    <React.Fragment>
      <Paragraph paragraph={bulletedListItem.bulleted_list_item} />
      {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
    </React.Fragment>
  )
}

export default MyBulletedList
