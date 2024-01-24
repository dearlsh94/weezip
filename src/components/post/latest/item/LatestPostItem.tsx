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
      <Linker aria-label={`${post.notionColumn.remark} 글 보기`} url={post.title}>
        <p>{post.notionColumn?.remark}</p>
        {post.notionColumn.tag && <Tags tag={post.notionColumn.tag} />}
        <div className="corner" />
        <IconSingleArrow color={'base'} direction="right" size={12} />
      </Linker>
    </li>
  );
}
