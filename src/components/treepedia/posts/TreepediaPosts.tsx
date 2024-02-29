import * as React from 'react';

import './TreepediaPosts.scss';
import { PostEmptyChecker } from '@components/post';

import { TreepediaPostItem } from './item';

import { NotionNode } from '@types';

interface TreepediaPostsProps {
  posts: NotionNode[];
}
export default function TreepediaPosts({ posts }: TreepediaPostsProps) {
  return (
    <PostEmptyChecker length={posts.length}>
      <ul className="treepedia-posts">
        {posts.map(post => {
          return <TreepediaPostItem key={post.id} post={post} />;
        })}
      </ul>
    </PostEmptyChecker>
  );
}
