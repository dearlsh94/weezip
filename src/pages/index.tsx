import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '@scss/global.scss'
import { INotionNode } from '@types'
import { useGetNotionQuery } from '@services'

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
