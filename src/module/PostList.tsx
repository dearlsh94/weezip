import * as React from 'react'
import Linker from '../components/Linker'
import PostListItem from '../components/PostListItem'
import '../scss/components.scss'
import { NotionNode } from '../types'
import { nodeToJson } from '../utils/notionUtils'
import { parseContentValue } from '../utils/parseUtils'

interface Props {
  list: NotionNode[]
}

const PostList = ({ list }: Props) => {
  const parseList: NotionNode[] = list.map(node => {
    const content = nodeToJson(node)
    const contentValue = parseContentValue(content)
    node.contentValue = contentValue
    return node
  })
  console.log({ parseList })
  parseList.sort((a, b) => {
    if (a.contentValue?.createdTime && b.contentValue?.createdTime) {
      return a.contentValue?.createdTime > b.contentValue?.createdTime ? -1 : 1
    } else {
      return 0
    }
  })
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
    </React.Fragment>
  )
}

export default PostList
