import * as React from 'react'
import '../scss/components.scss'
import { BlockType, Children } from '../types'
import Paragraph from '../components/Paragraph'
import Heading1 from '../components/Heading1'
import Heading2 from '../components/Heading2'
import Heading3 from '../components/Heading3'
import MyBulletedList from '../components/MyBulletedList'
import MyNumberedListItem from '../components/MyNumberedListItem'
import MyQuote from '../components/MyQuote'

interface Props {
  block: Children
}

const ContentChildren = ({ block }: Props) => {
  const { type } = block

  const render = () => {
    switch (type) {
      case BlockType.PARAGRAPH:
        if (block.paragraph) return <Paragraph paragraph={block.paragraph} />
      case BlockType.HEADING_1:
        if (block.heading_1) return <Heading1 head1={block.heading_1} />
      case BlockType.HEADING_2:
        if (block.heading_2) return <Heading2 head2={block.heading_2} />
      case BlockType.HEADING_3:
        if (block.heading_3) return <Heading3 head3={block.heading_3} />
      case BlockType.QUOTE:
        if (block.quote) return <MyQuote quote={block.quote} />
      case BlockType.BULLETED_LIST_ITEM:
        if (block.bulleted_list_item)
          return (
            <MyBulletedList
              bulletedList={block.bulleted_list_item}
              hasChild={block.has_children}
              childList={block.children}
            />
          )
      case BlockType.NUMBERED_LIST_ITEM:
        if (block) return <MyNumberedListItem numberedListItem={block} />
      default:
        break
    }
    return
  }
  return <div className={`content-children ${type}`}>{render()}</div>
}

export default ContentChildren
