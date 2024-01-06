import * as React from 'react';
import './index.scss';
import { moveToTop } from '@utils/scroll';
import TableOfContentsItem from '@components/post/tableOfContents/item';
import { usePostActiveText } from '@src/hooks/usePostActiveText';
import SideBarLayout from '@layout/SideBarLayout';

interface TableOfContentsSideProps {
  list: HTMLHeadingElement[];
}

export default function TableOfContentsSide({ list }: TableOfContentsSideProps) {
  const offsetTopPositions = list.map(i => {
    return {
      offsetTop: i.offsetTop,
      name: i.outerText,
    };
  });
  const activeText = usePostActiveText(offsetTopPositions);

  return (
    <SideBarLayout>
      <ol className="table-of-contents-side">
        <li className="tag-top" onClick={moveToTop}>
          맨위로
        </li>
        {list.map((item, i) => {
          const text = item.outerText;
          return (
            <TableOfContentsItem key={`table-of-contents-side-item-${i}`} item={item} isActive={activeText === text} />
          );
        })}
      </ol>
    </SideBarLayout>
  );
}
