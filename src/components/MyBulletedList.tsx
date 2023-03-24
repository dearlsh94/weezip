import * as React from 'react'
import '../scss/components.scss'
import { BulletedListItem } from '../types/componentType'
import Paragraph from './Paragraph'
import { Children } from '../types'

interface Props {
  bulletedList: BulletedListItem
  hasChild: boolean
  childList: Children[]
}

const MyBulletedList = ({ bulletedList, hasChild = false, childList = [] }: Props) => {
  let level = 0
  const render = (bulletedList: BulletedListItem, hasChild = false, childList: Children[], level: number) => {
    level++
    return (
      bulletedList && (
        <ul className={`block-bulleted-list level-${level}`}>
          <li>
            <Paragraph paragraph={bulletedList} />
          </li>
          {hasChild &&
            childList?.length > 0 &&
            render(childList[0]?.bulleted_list_item, childList[0]?.has_children, childList[0]?.children, level++)}
        </ul>
      )
    )
  }

  return <React.Fragment>{render(bulletedList, hasChild, childList, level)}</React.Fragment>
}

export default MyBulletedList
