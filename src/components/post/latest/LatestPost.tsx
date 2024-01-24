import * as React from 'react';

import './LatestPost.scss';

import { Linker } from '@components/ui';
import { useWeezipNotion } from '@hooks/useWeezipNotion';

import { LatestPostItem } from './item';

export default function LatestPost() {
  const { posts } = useWeezipNotion();

  return (
    <section className="latest-post">
      <div className="latest-post__title">
        <h2>최근 포스트</h2>
        <Linker aria-label="전체 목록 보기" url={'/list'}>
          전체 보기
        </Linker>
      </div>
      <ul>
        {posts.slice(0, 6).map(post => {
          return <LatestPostItem key={`latest-post-${post.id}`} post={post} />;
        })}
      </ul>
    </section>
  );
}
