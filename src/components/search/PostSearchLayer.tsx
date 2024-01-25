import * as React from 'react';
import { useRef, useState } from 'react';

import './PostSearchLayer.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import { IconClose, IconSearch } from '@components/icon';
import { DimLayout } from '@layout/dim';
import { throttle } from '@utils/common';
import { moveToPostsPage } from '@utils/url';

import { RecommendTag } from './recommend';

interface PostSearchLayerProps {
  handleClose: () => void;
}

export default function PostSearchLayer({ handleClose }: PostSearchLayerProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState('');

  const clear = () => {
    setSearchText('');
  };

  const search = throttle(() => {
    moveToPostsPage({ keyword: searchText });
    handleClose();
  }, 300);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      search();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      clear();
    }
  };

  return (
    <GlobalPortal.Consumer>
      <DimLayout handleClose={handleClose}>
        <div className="post-search-container">
          <div className="post-search-box">
            <div className="icon-close-box">
              <IconClose
                aria-label="검색창 닫기"
                className="icon-close"
                role="button"
                size={32}
                onClick={handleClose}
              />
            </div>
            <div className="search-box">
              <div className="input-box">
                <input
                  ref={inputRef}
                  className="search"
                  placeholder="검색어를 입력하세요."
                  type="text"
                  value={searchText}
                  autoFocus
                  onChange={e => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {searchText && (
                  <IconClose
                    aria-label="검색어 초기화"
                    className="icon-clear"
                    role="button"
                    size={28}
                    onClick={clear}
                  />
                )}
              </div>
              <IconSearch aria-label="검색하기" className="icon-search" role="button" size={28} onClick={search} />
            </div>
            <RecommendTag />
          </div>
        </div>
      </DimLayout>
    </GlobalPortal.Consumer>
  );
}
