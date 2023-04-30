import * as React from 'react'
import { useEffect, useState } from 'react'
import Linker from '@components/Linker'
import PostListItem from '@components/PostListItem'
import '@scss/components.scss'
import { NotionNode } from '@types'
import IconArrow from '@components/icon/IconArrow'

interface Props {
  list: NotionNode[]
}

const PostList = ({ list }: Props) => {
  const PER_PAGE = 10
  const FIRST_PAGE = 1
  const LAST_PAGE = Math.ceil(list.length / PER_PAGE)
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE)
  const [parseList, setParseList] = useState<NotionNode[]>([])

  useEffect(() => {
    setCurrentPage(1)
    setParseList(list.slice(0, PER_PAGE))
  }, [list])

  useEffect(() => {
    const indexOfLastPost = currentPage * PER_PAGE
    const indexOfFirstPost = indexOfLastPost - PER_PAGE
    setParseList(list.slice(indexOfFirstPost, indexOfLastPost))
  }, [currentPage])

  const handleOlder = () => {
    setCurrentPage(Math.max(currentPage - 1, FIRST_PAGE))
  }
  const handleNewer = () => {
    setCurrentPage(Math.min(currentPage + 1, LAST_PAGE))
  }

  return (
    <React.Fragment>
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
