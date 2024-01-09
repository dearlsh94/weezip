import * as React from 'react';
import './LatestPost.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { NotionNode } from '@types';
import { getParseListByNodes } from '@utils/notionUtils';
import { LatestPostItem } from './Item';
import { Linker } from '@components/ui';

export default function LatestPost() {
  const nodes = useGetNotionQuery();

  const parseList: NotionNode[] = getParseListByNodes(nodes);
  parseList.sort((a, b) => {
    if (a.notionColumn?.createdTime && b.notionColumn?.createdTime) {
      return a.notionColumn?.createdTime > b.notionColumn?.createdTime ? -1 : 1;
    } else {
      return 0;
    }
  });

  return (
    <section className="latest-post">
      <div className="latest-post__title">
        <h2>최근 포스트</h2>
        <Linker url={'/list'} aria-label="전체 목록 보기">
          전체 보기
        </Linker>
      </div>
      <ul>
        {parseList.slice(0, 6).map(post => {
          return <LatestPostItem key={`latest-post-${post.id}`} post={post} />;
        })}
      </ul>
    </section>
  );
}
