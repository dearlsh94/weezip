import * as React from 'react'
import { useEffect, useState } from 'react'
import Linker from '@components/Linker'
import PostListItem from '@components/PostListItem'
import '@scss/components.scss'
import { NotionNode } from '@types'
import IconArrow from '@components/icon/IconArrow'
import IconClearAll from '@components/icon/IconClearAll'
import { navigate } from 'gatsby'
import { parseLocationQuery } from '@utils/parseUtils'

interface Props {
  list: NotionNode[]
}

const PostList = ({ list }: Props) => {
  const PER_PAGE = 10
  const FIRST_PAGE = 1
  const LAST_PAGE = Math.ceil(list.length / PER_PAGE)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [parseList, setParseList] = useState<NotionNode[]>([])

  useEffect(() => {
    const { page } = parseLocationQuery(location.search)
    if (page) {
      setCurrentPage(Math.min(page, LAST_PAGE))
    } else {
      setCurrentPage(1)
    }
  }, [list])

  useEffect(() => {
    const indexOfLastPost = currentPage * PER_PAGE
    const indexOfFirstPost = indexOfLastPost - PER_PAGE
    setParseList(list.slice(indexOfFirstPost, indexOfLastPost))
  }, [currentPage])

  const handleOlder = () => {
    if (currentPage !== FIRST_PAGE) {
      handleMove(Math.max(currentPage - 1, FIRST_PAGE))
    }
  }
  const handleNewer = () => {
    if (currentPage !== LAST_PAGE) {
      handleMove(Math.min(currentPage + 1, LAST_PAGE))
    }
  }

  const handleMove = (page: number) => {
    const { series, category, tag } = parseLocationQuery(location.search)
    let url = '/list'
    let params = []
    if (series) params.push(`series=${series}`)
    if (category) params.push(`category=${category}`)
    if (tag) params.push(`tag=${tag}`)
    params.push(`page=${page}`)
    url += `?${params.join('&')}`
    navigate(url)
  }

  const handleReset = () => {
    navigate('/list')
  }

  return (
    <React.Fragment>
      {parseList.length === 0 && (
        <div className="post-list-empty-box">
          <p>검색 결과가 없습니다.</p>
          <p>전체 글들을 둘러보는 건 어떠세요 ?</p>
          <span onClick={handleReset}>
            <IconClearAll size={16} />
            전체글 보러가기
          </span>
        </div>
      )}
      {parseList?.length > 0 && (
        <ul className={`post-list-box`}>
          {parseList.map((post, i) => {
            return (
              <li key={`post-list-${i}`}>
                <Linker url={post.title}>
                  <PostListItem post={post} />
                </Linker>
              </li>
            )
          })}
        </ul>
      )}
      {parseList?.length > 0 && (
        <div className="post-list-page-box">
          <button
            className={`page-button prev ${currentPage === FIRST_PAGE ? 'disabled' : 'active'}`}
            onClick={handleOlder}
          >
            <IconArrow direction="left" size={16} />
            Older
          </button>
          <button
            className={`page-button next ${currentPage === LAST_PAGE ? 'disabled' : 'active'}`}
            onClick={handleNewer}
          >
            Newer
            <IconArrow direction="right" size={16} />
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default PostList
