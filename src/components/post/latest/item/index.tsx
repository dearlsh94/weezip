import { IconSingleArrow } from '@components/icon';
import Linker from '@components/ui/linker';
import { NotionNode } from '@types';
import React from 'react';
import './index.scss';
import Tags from '@components/post/tags';

interface LatestPostItemProps {
  post: NotionNode;
}

export default function LatestPostItem({ post }: LatestPostItemProps) {
  return (
    <li className="latest-post-item">
      <Linker url={post.title} aria-label={`${post.notionColumn.remark} 글 보기`}>
        <p>{post.notionColumn?.remark}</p>
        {post.notionColumn.tag && <Tags tag={post.notionColumn.tag} />}
        <div className="corner" />
        <IconSingleArrow size={12} color={'base'} direction="right" />
      </Linker>
    </li>
  );
}
