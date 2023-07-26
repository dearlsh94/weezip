import * as React from 'react'
import '@scss/module/LatestPost.scss'
import { useGetNotionQuery } from '@services/use-notion'
import { NotionNode } from '@types'
import { notionNodeToJson } from '@utils/notionUtils'
import { parseContentValue } from '@utils/parseUtils'
import Linker from '@components/ui/Linker'
import { IconArrow } from '@components/icon'

interface Props {}

const LatestPost = ({}: Props) => {
  const nodes = useGetNotionQuery()

  const parseList: NotionNode[] = nodes
    .map(node => {
      const content = notionNodeToJson(node)
      const contentValue = parseContentValue(content)
      node.contentValue = contentValue
      return node
    })
    .filter(n => n.title.startsWith('/post'))

  parseList.sort((a, b) => {
    if (a.contentValue?.createdTime && b.contentValue?.createdTime) {
      return a.contentValue?.createdTime > b.contentValue?.createdTime ? -1 : 1
    } else {
      return 0
    }
  })

  return (
    <section id="latest-post">
      <div className="title-box">
        <h2>최근 포스트</h2>
        <span className="link">
          <Linker url={'/list'}>
            전체보기
            <IconArrow direction="right" size={8} fill={'#5e8b7e'} />
          </Linker>
        </span>
      </div>
      <ul>
        {parseList.slice(0, 5).map((post, index) => {
          return (
            <li className="post-item" key={`latest-post-${index}`}>
              <Linker url={post.title}>{post.contentValue?.remark}</Linker>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default LatestPost
