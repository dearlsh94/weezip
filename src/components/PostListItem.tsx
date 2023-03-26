import * as React from 'react'
import '../scss/components.scss'
import { NotionNode } from '../types'
import { nodeToJson } from '../utils/notionUtils'
import { parseContentValue } from '../utils/parseUtils'

interface Props {
  post: NotionNode
}

const PostListItem = ({ post }: Props) => {
  const content = nodeToJson(post)
  console.log({ post, content })
  const contentValue = parseContentValue(content)
  return (
    <React.Fragment>
      <div className={`post-list-item`}>
        <p>{contentValue.remark}</p>
        <div className="info-box">
          <span>수정일 : {contentValue.lastEditedTime}</span>
          <span>작성일 : {contentValue.createdTime}</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostListItem
