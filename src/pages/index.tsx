import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { INotionNode } from '../types/notionTypes'
import { urlMap } from '../constants/url-map'

export const Head: HeadFC = () => <title>Home</title>

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  return (
    <main>
      Hello, stranger.
      <section>
        {nodes.map((node: INotionNode, i: number) => {
          return (
            <div key={`node-${i}`}>
              <a href={`${urlMap.get(node.id) || location.pathname}`}>
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
    </main>
  )
}

export default IndexPage
