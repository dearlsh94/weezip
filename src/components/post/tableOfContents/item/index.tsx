import { moveToOffset } from '@utils/scroll';
import React from 'react';
import './TableOfContentsItem.scss';

interface TableOfContentsItemProps {
  item: HTMLHeadingElement;
  isActive?: boolean;
}
function TableOfContentsItem({ item, isActive }: TableOfContentsItemProps) {
  const tag = item.tagName.toLowerCase();
  const text = item.outerText;

  return (
    <li
      id={`index-${text}`}
      className={`table-of-contents-item tag-${tag} ${isActive ? 'active' : ''}`}
      onClick={() => moveToOffset(item.offsetTop)}
    >
      {text}
    </li>
  );
}

export default TableOfContentsItem;
