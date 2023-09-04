import * as React from 'react'
import '@scss/module/PostIndex.scss'
import PostIndexList from '@components/PostIndexList'
import { IconArrow } from '@components/icon'
import useShow from '@src/hooks/useShow'

interface PostIndexProps {
  list: HTMLHeadingElement[]
}

const PostIndex = ({ list }: PostIndexProps) => {
  const showPostIndex = useShow()

  return (
    <div className="post-index-container">
      <div className="title-box" onClick={showPostIndex.change}>
        <p>목차 {showPostIndex.isShow ? '숨기기' : '보기'}</p>
        <div className={`icon-box ${showPostIndex.isShow ? '' : 'hide'}`}>
          <IconArrow direction={'top'} size={20} />
        </div>
      </div>
      <div className={`post-index-box ${showPostIndex.isShow ? '' : 'hide'}`}>
        {list && list?.length > 0 && <PostIndexList list={list} />}
      </div>
    </div>
  )
}

export default PostIndex
