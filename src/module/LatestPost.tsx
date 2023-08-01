import * as React from 'react'
import '@scss/module/LatestPost.scss'
import { useGetNotionQuery } from '@services/use-notion'
import { NotionNode } from '@types'
import { notionNodeToJson } from '@utils/notionUtils'
import { parseNotionColumn } from '@utils/parseUtils'
import Linker from '@components/ui/Linker'
import { IconArrow } from '@components/icon'

const LatestPost = () => {
  const nodes = useGetNotionQuery()

  const parseList: NotionNode[] = nodes
    .map(node => {
      const content = notionNodeToJson(node)
      node.notionColumn = parseNotionColumn(content)
      return node
    })
    .filter(n => n.title.startsWith('/post'))

  parseList.sort((a, b) => {
    if (a.notionColumn?.createdTime && b.notionColumn?.createdTime) {
      return a.notionColumn?.createdTime > b.notionColumn?.createdTime ? -1 : 1
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
        {parseList.slice(0, 5).map(post => {
          return (
            <li className="post-item" key={`latest-post-${post.id}`}>
              <Linker url={post.title}>{post.notionColumn?.remark}</Linker>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default LatestPost
