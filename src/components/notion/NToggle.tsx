import * as React from 'react';
import '@scss/notion.scss';
import { Children, TextBlock } from '@types';
import { NParagraph } from '@components/notion';
import ContentWrapper from '@module/ContentWrapper';
import { IconArrow } from '@components/icon';

interface NToggleProps {
  toggle: TextBlock;
  hasChild: boolean;
  childList: Children[];
}

export default function NToggle({ toggle, hasChild, childList }: NToggleProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {toggle && (
        <details className="block-toggle">
          <summary className="toggle-title-box" onClick={() => setIsOpen(!isOpen)}>
            <div className={`icon-box ${isOpen ? 'open' : ''}`}>
              <IconArrow direction="right" size={16} />
            </div>
            <NParagraph paragraph={toggle} />
          </summary>
          <section className="toggle-content-box">
            {isOpen && hasChild && childList?.length > 0 && <ContentWrapper childrens={childList} />}
          </section>
        </details>
      )}
    </>
  );
}
