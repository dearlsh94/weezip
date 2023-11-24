import * as React from 'react';
import { BlockType, Children } from '@types';
import {
  NHeading1,
  NHeading2,
  NHeading3,
  NBookmark,
  NBulletedList,
  NCallout,
  NCode,
  NNumberedListItem,
  NParagraph,
  NQuote,
  NTodo,
  NToggle,
} from '@components/notion';
import NImage from '@components/notion/NImage';
import Divider from '@components/ui/Divider';

interface ContentChildrenProps {
  block: Children;
}

const ContentChildren = ({ block }: ContentChildrenProps) => {
  const { type } = block;
  const render = () => {
    switch (type) {
      case BlockType.PARAGRAPH:
        if (block.paragraph) return <NParagraph paragraph={block.paragraph} />;
      case BlockType.HEADING_1:
        if (block.heading_1) return <NHeading1 head1={block.heading_1} />;
      case BlockType.HEADING_2:
        if (block.heading_2) return <NHeading2 head2={block.heading_2} />;
      case BlockType.HEADING_3:
        if (block.heading_3) return <NHeading3 head3={block.heading_3} />;
      case BlockType.QUOTE:
        if (block.quote) return <NQuote quote={block.quote} children={block.children} />;
      case BlockType.BULLETED_LIST_ITEM:
        if (block.bulleted_list_item) return <NBulletedList bulletedListItem={block} />;
      case BlockType.NUMBERED_LIST_ITEM:
        if (block.numbered_list_item) return <NNumberedListItem numberedListItem={block} />;
      case BlockType.TODO:
        if (block.to_do) return <NTodo todo={block.to_do} blockId={block.id} />;
      case BlockType.CALLOUT:
        if (block.callout) return <NCallout callout={block.callout} children={block.children} />;
      case BlockType.TOGGLE:
        if (block.toggle)
          return <NToggle toggle={block.toggle} hasChild={block.has_children} childList={block.children} />;
      case BlockType.BOOKMARK:
        if (block.bookmark) return <NBookmark bookmark={block.bookmark} />;
      case BlockType.CODE:
        if (block.code) return <NCode code={block.code} />;
      case BlockType.IMAGE:
        if (block.image) return <NImage imageBlock={block} />;
      case BlockType.DIVIDER:
        if (block.divider) return <Divider />;
      default:
        break;
    }
    return;
  };
  return <div className={`${type}`}>{render()}</div>;
};

export default ContentChildren;
