import * as React from 'react'
import '../scss/components.scss'
import { Children } from '../types'
import Paragraph from '../components/Paragraph'
import MyBulletedList from '../components/MyBulletedList'

interface Props {
  block: Children
}

const ContentChildren = ({ block }: Props) => {
  const { type } = block
  const render = () => {
    switch (type) {
      case 'paragraph':
        return <Paragraph paragraph={block.paragraph} />
      case 'bulleted_list_item':
        return (
          <MyBulletedList
            bulletedList={block.bulleted_list_item}
            hasChild={block.has_children}
            childList={block.children}
          />
        )
      case 'numbered_list_item':
        return <div />
      default:
        break
    }
    return
  }
  return <div className="content-children">{render()}</div>
}

export default ContentChildren
