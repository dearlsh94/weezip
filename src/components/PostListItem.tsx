import * as React from 'react'
import '@scss/components/PostListItem.scss'
import { NotionNode } from '@types'
import TagBadges from '@components/TagBadges'

interface Props {
  post: NotionNode
}

const PostListItem = ({ post }: Props) => {
  const { notionColumn } = post
  const remark = notionColumn?.remark || ''
  const lastEditedTime = notionColumn?.lastEditedTime || ''
  const createdTime = notionColumn?.createdTime || ''
  const tag = notionColumn?.tag || []
  const series = notionColumn?.series
  return (
    <React.Fragment>
      <div className={`post-list-item`}>
        {series && <span className="series">시리즈 [{series?.name}]</span>}
        <p>{remark}</p>
        <div className="info-box">
          <div className="tag-box">
            <TagBadges postItemTags={tag} isLink={false} />
          </div>
          <div className="date-box">
            <span className="date">작성 : {createdTime}</span>
            <span className="date">수정 : {lastEditedTime}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostListItem
