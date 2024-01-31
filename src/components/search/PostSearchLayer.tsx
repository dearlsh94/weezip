import * as React from 'react';
import { useRef, useState } from 'react';

import './PostSearchLayer.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import { IconClose, IconSearch } from '@components/icon';
import { DimLayout } from '@layout/dim';
import { ARIA_LABEL } from '@src/constants';
import { useShowSearchStore } from '@store/config';
import { throttle } from '@utils/common';
import { moveToPostsPage } from '@utils/url';

import { RecommendTag } from './recommend';

export default function PostSearchLayer() {
  const { isShow, close: handleSearchClose } = useShowSearchStore();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState('');

  const clear = () => {
    setSearchText('');
  };

  const search = throttle(() => {
    moveToPostsPage({ keyword: searchText });
    handleSearchClose();
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
    isShow && (
      <GlobalPortal.Consumer>
        <DimLayout handleClose={handleSearchClose}>
          <div className="post-search-container">
            <div className="post-search-box">
              <div className="icon-close-box">
                <IconClose
                  aria-label={`검색창 ${ARIA_LABEL.CLOSE}`}
                  className="icon-close"
                  role="button"
                  size={32}
                  onClick={handleSearchClose}
                />
              </div>
              <div className="search-box">
                <div className="input-box">
                  <input
                    ref={inputRef}
                    className="search"
                    placeholder="검색어를 입력하세요."
                    type="search"
                    value={searchText}
                    autoFocus
                    onChange={e => setSearchText(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  {searchText && (
                    <IconClose
                      aria-label={`검색어 ${ARIA_LABEL.RESET}`}
                      className="icon-clear"
                      role="button"
                      size={28}
                      onClick={clear}
                    />
                  )}
                </div>
                <IconSearch
                  aria-label={ARIA_LABEL.SEARCH}
                  className="icon-search"
                  role="button"
                  size={28}
                  onClick={search}
                />
              </div>
              <RecommendTag />
            </div>
          </div>
        </DimLayout>
      </GlobalPortal.Consumer>
    )
  );
}
