import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { NotionNode } from '../types/nodeTypes'
import { getContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentChildren from '../module/ContentChildren'

export const Head: HeadFC = () => <title>Home</title>

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const content: Children | null = getContentNode(nodes, '/')
  console.log({ content })
  return (
    <main>
      <section>
        {nodes.map((node: NotionNode, i: number) => {
          return (
            <div key={`node-${i}`}>
              <a href={`${node.title || location.pathname}`}>
                <p>
                  <span>id: {node.id}</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>title: {node.title}</span>
                </p>
              </a>
            </div>
          )
        })}
      </section>
      {content && (
        <section>
          {content?.children?.map((block, i) => {
            return (
              <div key={i}>
                <ContentChildren block={block} />
              </div>
            )
          })}
        </section>
      )}
    </main>
  )
}

export default IndexPage
