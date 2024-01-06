import * as React from 'react';
import { useRef, useState } from 'react';
import '@scss/module/PostSearchLayer.scss';
import { throttle } from '@utils/common';
import { IconClose, IconSearch } from '@components/icon';
import { navigate } from 'gatsby';
import RecommendTag from '../components/post/RecommendTag';
import { GlobalPortal } from '@components/GlobalPortal';
import DimLayout from '@layout/dim';

interface PostSearchLayerProps {
  handleClose: () => void;
}

const PostSearchLayer = ({ handleClose }: PostSearchLayerProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState('');

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const clear = () => {
    setSearchText('');
  };

  const search = throttle(() => {
    navigate(`/list?keyword=${encodeURIComponent(searchText)}`);
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
    <DimLayout handleClose={handleClose}>
      <GlobalPortal.Consumer>
        <div className="post-search-container">
          <div className="post-search-box">
            <div className="icon-close-box">
              <IconClose size={32} handleClick={handleClose} />
            </div>
            <div className="search-box">
              <div className="input-box">
                <input
                  ref={inputRef}
                  className="search"
                  type="text"
                  placeholder="검색어를 입력하세요."
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {searchText && (
                  <div className="icon-clear-box">
                    <IconClose size={28} handleClick={clear} />
                  </div>
                )}
              </div>
              <div className="icon-search-box">
                <IconSearch size={28} handleClick={search} />
              </div>
            </div>
            <RecommendTag />
          </div>
        </div>
      </GlobalPortal.Consumer>
    </DimLayout>
  );
};

export default PostSearchLayer;
