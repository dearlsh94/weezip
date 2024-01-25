import React from 'react';

import './PostsDescription.scss';
import { IconClearAll } from '@components/icon';
import { ARIA_LABEL } from '@src/constants';
import { moveToPostsPage } from '@utils/url';

interface PostsDescriptionProps {
  isLoading: boolean;
  length: number;
  filteredText: string;
}

export default function PostsDescription({ isLoading, length, filteredText }: PostsDescriptionProps) {
  return (
    <div className={`posts-description ${isLoading ? 'loading' : ''}`}>
      <IconClearAll aria-label={`글 목록 페이지로 ${ARIA_LABEL.MOVE}`} onClick={() => moveToPostsPage({})} />
      <div className="count-box ellipsis">
        {filteredText && (
          <strong>
            {filteredText}
            <span> | </span>
          </strong>
        )}
        총 <span>{length}</span>건{filteredText !== '전체' && '의 검색결과'}
      </div>
    </div>
  );
}
