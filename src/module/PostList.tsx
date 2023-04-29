import * as React from 'react'
import Linker from '@components/Linker'
import PostListItem from '@components/PostListItem'
import '@scss/components.scss'
import { NotionNode } from '../types'

interface Props {
  list: NotionNode[]
}

const PostList = ({ list }: Props) => {
  return (
    <React.Fragment>
      {list?.length > 0 && (
        <ul className={`post-list-box`}>
          {list.map((post, i) => {
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
