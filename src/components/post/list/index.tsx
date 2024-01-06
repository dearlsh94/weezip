import * as React from 'react';
import './index.scss';
import { NotionNode } from '@types';
import PostPagination from '@components/post/pagination';
import usePagination from '@src/hooks/usePagination';
import PostsItem from './item';
import PostsEmpty from './empty';

interface PostsProps {
  list: NotionNode[];
}

export default function Posts({ list }: PostsProps) {
  const pagination = usePagination({
    perPage: 10,
    totalCount: list.length,
  });
  const { indexOfFirstItem, indexOfLastItem } = pagination;
  const posts = list.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {posts.length > 0 ? (
        <>
          <ul className={`posts-container`}>
            {posts.map(post => {
              return <PostsItem key={`posts-item-${post.id}`} post={post} />;
            })}
          </ul>
          <PostPagination pagination={pagination} />
        </>
      ) : (
        <PostsEmpty />
      )}
    </>
  );
}
