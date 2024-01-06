import { IconClearAll } from '@components/icon';
import { navigate } from 'gatsby';
import React from 'react';
import './index.scss';

interface PostsDescriptionProps {
  isLoading: boolean;
  length: number;
  filteredText: string;
}

export default function PostsDescription({ isLoading, length, filteredText }: PostsDescriptionProps) {
  const moveInit = () => {
    navigate('/list');
  };
  return (
    <div className={`posts-description ${isLoading ? 'loading' : ''}`}>
      <IconClearAll handleClick={moveInit} />
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
