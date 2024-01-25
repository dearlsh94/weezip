import * as React from 'react';

import './NToggle.scss';

import { IconSingleArrow } from '@components/icon';
import { NParagraph } from '@components/notion';
import { Contents } from '@components/post';

import { NotionChildrenType, TextBlock } from '@types';

interface NToggleProps {
  toggle: TextBlock;
  hasChild: boolean;
  childList: NotionChildrenType[];
}

export default function NToggle({ toggle, hasChild, childList }: NToggleProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <details className="block-toggle">
      <summary
        aria-label={`현재 토글 블럭 ${isOpen ? '접기' : '펼치기'}`}
        className="toggle-title-box"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`icon-box ${isOpen ? 'open' : ''}`}>
          <IconSingleArrow direction="right" size={16} />
        </div>
        <NParagraph paragraph={toggle} />
      </summary>
      <section className="toggle-content-box">
        {isOpen && hasChild && childList?.length > 0 && <Contents childrens={childList} />}
      </section>
    </details>
  );
}
