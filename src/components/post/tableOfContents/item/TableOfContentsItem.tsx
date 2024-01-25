import React from 'react';

import './TableOfContentsItem.scss';
import { moveToOffset } from '@utils/scroll';

interface TableOfContentsItemProps {
  item: HTMLHeadingElement;
  isActive?: boolean;
}
export default function TableOfContentsItem({ item, isActive }: TableOfContentsItemProps) {
  const tag = item.tagName.toLowerCase();
  const text = item.outerText;

  return (
    <li
      aria-label={`${text} 문단으로 이동하기`}
      className={`table-of-contents-item tag-${tag} ${isActive ? 'active' : ''}`}
      id={`index-${text}`}
      onClick={() => moveToOffset(item.offsetTop)}
    >
      {text}
    </li>
  );
}
