import React from 'react';

import './LatestPostItem.scss';
import { IconSingleArrow } from '@components/icon';
import { Tags } from '@components/post';
import { Linker } from '@components/ui';

import { NotionNode } from '@types';

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
