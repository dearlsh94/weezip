import * as React from 'react'
import '@scss/module/PostIndex.scss'
import PostIndexList from '@components/PostIndexList'
import { IconArrow } from '@components/icon'

interface Props {
  list: HTMLHeadingElement[]
}

const PostIndex = ({ list }: Props) => {
  const [isShowIndex, setIsShowIndex] = React.useState(false)

  const handleShowIndex = () => {
    setIsShowIndex(!isShowIndex)
  }
  return (
    <>
      <div className="index-box">
        <div className="title-box" onClick={handleShowIndex}>
          <p>목차 {isShowIndex ? '숨기기' : '보기'}</p>
          <div className={`icon-box ${isShowIndex ? '' : 'hide'}`}>
            <IconArrow direction={'top'} size={20} />
          </div>
        </div>
        <div className={`post-index-box ${isShowIndex ? '' : 'hide'}`}>
          {list && list?.length > 0 && <PostIndexList list={list} />}
        </div>
      </div>
    </>
  )
}

export default PostIndex
