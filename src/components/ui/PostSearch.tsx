import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import '@scss/components/ui/PostSearch.scss'
import DimWrapper from '@layout/DimWrapper'
import { throttle } from '@utils/commonUtils'
import IconClose from '@components/icon/IconClose'
import IconSearch from '@components/icon/IconSearch'
import { navigate } from 'gatsby'
import HelpText from '@components/ui/HelpText'
import Linker from '@components/ui/Linker'

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
          <div className="post-search-box">
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
            {/* 검색창 닫기 버튼의 위치를 못잡겠어서 우선 주석처리 */}
            {/* <div className="icon-close-box" onClick={handleClose}>
              <IconClose size={32} />
            </div> */}
            <div className="recommend-box">
              <HelpText text={'이런 건 어때요?'} />
              <Linker url={`/list/?series=60`} className="item">
                #문화소비자시점
              </Linker>
              <Linker url={`/list/?tag=Dev`} className="item">
                #Dev
              </Linker>
              <Linker url={`/list/?tag=Essay`} className="item">
                #Essay
              </Linker>
            </div>
          </div>
        </DimWrapper>
      </div>
    </React.Fragment>
  )
}

export default PostSearch
