import * as React from 'react';
import './Posts.scss';
import { NotionNode } from '@types';
import usePagination from '@src/hooks/usePagination';
import { PostsItem } from './item';
import { Pagination } from '../pagination';
import { PostEmptyChecker } from './emptyChecker';

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
    <PostEmptyChecker length={posts.length}>
      <ul className={`posts-container`}>
        {posts.map(post => {
          return <PostsItem key={`posts-item-${post.id}`} post={post} />;
        })}
      </ul>
      <Pagination pagination={pagination} />
    </PostEmptyChecker>
  );
}
