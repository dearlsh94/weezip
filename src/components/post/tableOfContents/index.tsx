import useResize from '@src/hooks/useResize';
import React from 'react';
import SideBarLayout from '@layout/SideBarLayout';
// import './TableOfContents.scss';
import TableOfContentsSide from '@components/post/tableOfContents/side';
import TableOfContentsBlock from '@components/post/tableOfContents/block';

interface TableOfContentsProps {
  tableOfContents: HTMLHeadingElement[];
}

export default function TableOfContents({ tableOfContents }: TableOfContentsProps) {
  const { resizedInnerWidth } = useResize();

  return (
    <section>
      <TableOfContentsBlock list={tableOfContents} />
      {resizedInnerWidth > 1280 && (
        <SideBarLayout>
          <TableOfContentsSide list={tableOfContents} />
        </SideBarLayout>
      )}
    </section>
  );
}
