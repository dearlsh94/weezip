import * as React from 'react'
import '@scss/components.scss'
import { NotionNode } from '@types'
import TagBadges from './TagBadges'

interface Props {
  post: NotionNode
}

const PostListItem = ({ post }: Props) => {
  const { contentValue } = post
  const remark = contentValue?.remark || ''
  const lastEditedTime = contentValue?.lastEditedTime || ''
  const createdTime = contentValue?.createdTime || ''
  const tag = contentValue?.tag || []
  const series = contentValue?.series || ''
  return (
    <React.Fragment>
      <div className={`post-list-item`}>
        {series && <span className="series">[{series}]</span>}
        <p>{remark}</p>
        <div className="info-box">
          <div className="tag-box">
            <TagBadges selectTags={tag} />
          </div>
          <div className="date-box">
            <span className="date">작성일 : {createdTime}</span>
            <span className="date">수정일 : {lastEditedTime}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostListItem
