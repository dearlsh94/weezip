import * as React from 'react';
import './LatestPost.scss';
import { LatestPostItem } from './item';
import { Linker } from '@components/ui';
import { useWeezipNotion } from '@src/hooks/useWeezipNotion';

export default function LatestPost() {
  const { posts } = useWeezipNotion();

  return (
    <section className="latest-post">
      <div className="latest-post__title">
        <h2>최근 포스트</h2>
        <Linker url={'/list'} aria-label="전체 목록 보기">
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
