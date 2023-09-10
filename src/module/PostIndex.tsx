import * as React from 'react'
import '@scss/module/PostIndex.scss'
import PostIndexList from '@components/PostIndexList'
import { IconArrow } from '@components/icon'
import useShow from '@src/hooks/useShow'
import SideBarLayout from '@layout/SideBarLayout'
import useResize from '@src/hooks/useResize'
interface PostIndexProps {
  list: HTMLHeadingElement[]
}

const PostIndex = ({ list }: PostIndexProps) => {
  const showPostIndex = useShow()
  const { resizedInnerWidth } = useResize()

  return (
    <section className="post-index-container">
      <div className="title-box" onClick={showPostIndex.change}>
        <p>목차 {showPostIndex.isShow ? '숨기기' : '보기'}</p>
        <div className={`icon-box ${showPostIndex.isShow ? '' : 'hide'}`}>
          <IconArrow direction={'top'} size={20} />
        </div>
      </div>
      <div className={`post-index-box ${showPostIndex.isShow ? '' : 'hide'}`}>
        {list && list?.length > 0 && <PostIndexList list={list} />}
      </div>
      {resizedInnerWidth > 1280 && (
        <SideBarLayout handleClose={() => {}} useDim={false}>
          <div className="side-post-index">
            <PostIndexList list={list} useMoveTop={true} useActive={true} />
          </div>
        </SideBarLayout>
      )}
    </section>
  )
}

export default PostIndex
