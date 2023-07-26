import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import '@scss/components/ui/PostSearch.scss'
import DimWrapper from '@layout/DimWrapper'
import { throttle } from '@utils/commonUtils'
import { IconClose, IconSearch } from '@components/icon'
import { navigate } from 'gatsby'
import RecommendTag from '../RecommendTag'

interface Props {
  children?: React.ReactNode
}

const PostSearch = ({ children }: Props) => {
  const [isShowSearch, setIsShowSearch] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (isShowSearch) {
      document.body.style.overflow = 'hidden'
      inputRef?.current?.focus()
    } else {
      document.body.style.overflow = 'auto'
      handleClear()
    }
  }, [isShowSearch])

  const handleOpen = () => {
    setIsShowSearch(true)
  }
  const handleClose = () => {
    setIsShowSearch(false)
  }
  const handleClear = () => {
    setSearchText('')
    inputRef?.current?.focus()
  }

  const search = throttle(() => {
    navigate(`/list?keyword=${encodeURIComponent(searchText)}`)
    handleClose()
  }, 300)

  const handleSearch = () => {
    search()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setSearchText('')
    }
  }

  return (
    <React.Fragment>
      <div onClick={handleOpen}>{children}</div>
      <div className={`post-search-container ${isShowSearch ? 'open' : ''}`}>
        <DimWrapper handleClose={handleClose}>
          <div className="post-search-box-wrapper">
            <div className="post-search-box">
              <div className="icon-close-box">
                <IconClose size={32} handleClick={handleClose} />
              </div>
              <div className="search-box">
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
                  <div className="icon-clear-box" onClick={handleClear}>
                    <IconClose size={28} />
                  </div>
                )}
                <div className="icon-search-box" onClick={handleSearch}>
                  <IconSearch size={28} />
                </div>
              </div>
              <RecommendTag />
            </div>
          </div>
        </DimWrapper>
      </div>
    </React.Fragment>
  )
}

export default PostSearch
