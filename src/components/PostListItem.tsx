import * as React from 'react'
import '../scss/components.scss'
import { NotionNode } from '../types'
import { nodeToJson } from '../utils/notionUtils'
import { parseContentValue } from '../utils/parseUtils'

interface Props {
  post: NotionNode
}

const PostListItem = ({ post }: Props) => {
  const { contentValue } = post
  const remark = contentValue?.remark || ''
  const lastEditedTime = contentValue?.lastEditedTime || ''
  const createdTime = contentValue?.createdTime || ''
  console.log({ post })
  return (
    <React.Fragment>
      <div className={`post-list-item`}>
        <p>{remark}</p>
        <div className="info-box">
          <span>수정일 : {lastEditedTime}</span>
          <span>작성일 : {createdTime}</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostListItem
