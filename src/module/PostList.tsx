import * as React from 'react'
import Linker from '@components/ui/Linker'
import PostListItem from '@components/PostListItem'
import '@scss/module/PostList.scss'
import { NotionNode } from '@types'
import { navigate } from 'gatsby'
import { IconClearAll } from '@components/icon'
import Pagination from '@components/Pagination'

interface Props {
  list: NotionNode[]
  currentPage: number
  lastPage: number
}

const PostList = ({ list, currentPage, lastPage }: Props) => {
  const handleReset = () => {
    navigate('/list')
  }

  return (
    <>
      {list.length === 0 && (
        <div className="post-list-empty-box">
          <p>검색 결과가 없습니다.</p>
          <p>전체 글들을 둘러보는 건 어떠세요 ?</p>
          <span onClick={handleReset}>
            <IconClearAll size={16} />
            전체글 보러가기
          </span>
        </div>
      )}
      {list?.length > 0 && (
        <ul className={`post-list-box`}>
          {list.map(post => {
            return (
              <li key={`post-list-${post.id}`}>
                <Linker url={post.title} aria-label={`${post.title} 글 보기`}>
                  <PostListItem post={post} />
                </Linker>
              </li>
            )
          })}
        </ul>
      )}
      {list?.length > 0 && <Pagination lastPage={lastPage} currentPage={currentPage} />}
    </>
  )
}

export default PostList
