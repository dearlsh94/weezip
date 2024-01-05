import * as React from 'react';
import './TableOfContentsBlock.scss';
import TableOfContentsItem from '@components/post/tableOfContents/item';
import { usePostActiveText } from '@src/hooks/usePostActiveText';
import useShow from '@src/hooks/useShow';
import { IconArrow } from '@components/icon';

interface TableOfContentsBlockProps {
  list: HTMLHeadingElement[];
}

export default function TableOfContentsBlock({ list }: TableOfContentsBlockProps) {
  const showPostIndex = useShow();

  const offsetTopPositions = list.map(i => {
    return {
      offsetTop: i.offsetTop,
      name: i.outerText,
    };
  });
  const activeText = usePostActiveText(offsetTopPositions);

  return (
    <div className="table-of-contents-block">
      <div className="table-of-contents-block__wrapper">
        <div className="table-of-contents-block__wrapper__header" onClick={showPostIndex.change}>
          <p>목차 {showPostIndex.isShow ? '숨기기' : '보기'}</p>
          <div className={`icon-box ${showPostIndex.isShow ? '' : 'hide'}`}>
            <IconArrow direction={'top'} size={20} />
          </div>
        </div>
        {list?.length > 0 && (
          <ol className={`table-of-contents-block__list ${showPostIndex.isShow ? '' : 'hidden'}`}>
            {list.map((item, i) => {
              const text = item.outerText;
              return (
                <TableOfContentsItem
                  key={`table-of-contents-block-side-item-${i}`}
                  item={item}
                  isActive={activeText === text}
                />
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
