import * as React from 'react'
import '@scss/components.scss'
import { BlockType, Children } from '../types'
import Paragraph from '@components/notion/Paragraph'
import Heading1 from '@components/notion/Heading1'
import Heading2 from '@components/notion/Heading2'
import Heading3 from '@components/notion/Heading3'
import MyBulletedList from '@components/notion/MyBulletedList'
import MyNumberedListItem from '@components/notion/MyNumberedListItem'
import MyQuote from '@components/notion/MyQuote'
import MyTodo from '@components/notion/MyTodo'
import MyCallout from '@components/notion/MyCallout'
import MyToggle from '@components/notion/MyToggle'
import MyBookmark from '@components/notion/MyBookmark'
import MyCode from '@components/notion/MyCode'
import MyImage from '@components/notion/MyImage'
import Divider from '@components/notion/Divider'

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
        if (block.bulleted_list_item) return <MyBulletedList bulletedListItem={block} />
      case BlockType.NUMBERED_LIST_ITEM:
        if (block) return <MyNumberedListItem numberedListItem={block} />
      case BlockType.TODO:
        if (block.to_do) return <MyTodo todo={block.to_do} />
      case BlockType.CALLOUT:
        if (block.callout) return <MyCallout callout={block.callout} />
      case BlockType.TOGGLE:
        if (block.toggle)
          return <MyToggle toggle={block.toggle} hasChild={block.has_children} childList={block.children} />
      case BlockType.BOOKMARK:
        if (block.bookmark) return <MyBookmark bookmark={block.bookmark} />
      case BlockType.CODE:
        if (block.code) return <MyCode code={block.code} />
      case BlockType.IMAGE:
        if (block.image) return <MyImage imageBlock={block} />
      case BlockType.DIVIDER:
        if (block.divider) return <Divider />
      default:
        break
    }
    return
  }
  return <div className={`content-children ${type}`}>{render()}</div>
}

export default ContentChildren
