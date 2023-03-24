import * as React from 'react'
import '../scss/components.scss'
import { BlockType, Children } from '../types'
import Paragraph from '../components/Paragraph'
import MyBulletedList from '../components/MyBulletedList'
import MyNumberedListItem from '../components/MyNumberedListItem'

interface Props {
  block: Children
}

const ContentChildren = ({ block }: Props) => {
  const { type } = block

  const render = () => {
    switch (type) {
      case BlockType.PARAGRAPH:
        return <Paragraph paragraph={block.paragraph} />
      case BlockType.BULLETED_LIST_ITEM:
        return (
          <MyBulletedList
            bulletedList={block.bulleted_list_item}
            hasChild={block.has_children}
            childList={block.children}
          />
        )
      case BlockType.NUMBERED_LIST_ITEM:
        return <MyNumberedListItem numberedListItem={block} />
      default:
        break
    }
    return
  }
  return <div className={`content-children ${type}`}>{render()}</div>
}

export default ContentChildren
