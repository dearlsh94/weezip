import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { NotionNode } from '../types/nodeTypes'
import { getContentNode, getMDContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import MarkdownChildren from '../module/MarkdownChildren'
import ContentWrapper from '../module/ContentWrapper'

export const Head: HeadFC = () => <title>Home</title>

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const content: Children | null = getContentNode(nodes, '/intro')
  const md = getMDContentNode(nodes, '/intro')
  console.log({ content, md })
  return (
    <main>
      Hello, stranger.
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
      {content && <ContentWrapper childrens={content.children} />}
    </main>
  )
}

export default IndexPage
