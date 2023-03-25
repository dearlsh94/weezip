import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { NotionNode } from '../types/nodeTypes'
import { getContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import MainLayout from '../layout/MainLayout'
import { NotionContext } from '../store/rootStore'

export const Head: HeadFC = () => <title>Intro</title>

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const content: Children | null = getContentNode(nodes, '/intro')
  console.log({ content })
  return (
    <NotionContext.Provider value={nodes}>
      <MainLayout>
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
      </MainLayout>
    </NotionContext.Provider>
  )
}

export default IndexPage
