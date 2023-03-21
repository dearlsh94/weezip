import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { NotionNode } from '../types/notionTypes'
import { getContentNode } from '../utils/notionUtils'
import { PageContent } from '../types/contentType'

export const Head: HeadFC = () => <title>Home</title>

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const content: PageContent | null = getContentNode(nodes, '/')
  console.log({ content })
  return (
    <main>
      Hello, stranger.
      <section>
        {nodes.map((node: NotionNode, i: number) => {
          return (
            <div key={`node-${i}`}>
              <a href={`${null || location.pathname}`}>
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
          {content.children.map((c, i) => {
            return <div key={i}>{c.paragraph.text[0].plain_text}</div>
          })}
        </section>
      )}
    </main>
  )
}

export default IndexPage
