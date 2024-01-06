import { IconClearAll } from '@components/icon';
import { navigate } from 'gatsby';
import React from 'react';
import './index.scss';

export default function PostsEmpty() {
  const handleReset = () => {
    navigate('/list');
  };
  return (
    <div className="posts-empty">
      <p>검색 결과가 없습니다.</p>
      <p>전체 글들을 둘러보는 건 어떠세요 ?</p>
      <span onClick={handleReset}>
        <IconClearAll size={16} />
        전체글 보러가기
      </span>
    </div>
  );
}
