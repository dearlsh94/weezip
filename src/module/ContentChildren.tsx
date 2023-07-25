import * as React from 'react'
import { BlockType, Children } from '@types'
import NParagraph from '@components/notion/NParagraph'
import NHeading1 from '@components/notion/NHeading1'
import NHeading2 from '@components/notion/NHeading2'
import NHeading3 from '@components/notion/NHeading3'
import NBulletedList from '@components/notion/NBulletedList'
import NNumberedListItem from '@components/notion/NNumberedListItem'
import NQuote from '@components/notion/NQuote'
import NTodo from '@components/notion/NTodo'
import NCallout from '@components/notion/NCallout'
import NToggle from '@components/notion/NToggle'
import NBookmark from '@components/notion/NBookmark'
import NCode from '@components/notion/NCode'
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
        if (block.paragraph) return <NParagraph paragraph={block.paragraph} />
      case BlockType.HEADING_1:
        if (block.heading_1) return <NHeading1 head1={block.heading_1} />
      case BlockType.HEADING_2:
        if (block.heading_2) return <NHeading2 head2={block.heading_2} />
      case BlockType.HEADING_3:
        if (block.heading_3) return <NHeading3 head3={block.heading_3} />
      case BlockType.QUOTE:
        if (block.quote) return <NQuote quote={block.quote} />
      case BlockType.BULLETED_LIST_ITEM:
        if (block.bulleted_list_item) return <NBulletedList bulletedListItem={block} />
      case BlockType.NUMBERED_LIST_ITEM:
        if (block) return <NNumberedListItem numberedListItem={block} />
      case BlockType.TODO:
        if (block.to_do) return <NTodo todo={block.to_do} />
      case BlockType.CALLOUT:
        if (block.callout) return <NCallout callout={block.callout} children={block.children} />
      case BlockType.TOGGLE:
        if (block.toggle)
          return <NToggle toggle={block.toggle} hasChild={block.has_children} childList={block.children} />
      case BlockType.BOOKMARK:
        if (block.bookmark) return <NBookmark bookmark={block.bookmark} />
      case BlockType.CODE:
        if (block.code) return <NCode code={block.code} />
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
