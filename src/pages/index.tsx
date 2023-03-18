import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../css/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { INode } from '../types/notionTypes'

export const Head: HeadFC = () => <title>Home</title>

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  return (
    <main>
      Hello, stranger.
      <section>
        {nodes.map((node: INode, i: number) => {
          return (
            <div key={`node-${i}`}>
              <p>
                <span>id: {node.id}</span>
                <span>&nbsp;/&nbsp;</span>
                <span>title: {node.title}</span>
              </p>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default IndexPage
