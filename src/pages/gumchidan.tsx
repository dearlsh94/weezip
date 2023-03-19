import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useGetNotionQuery } from '../services/use-notion'
import { INotionNode } from '../types/notionTypes'
import { getGumchidanNode } from '../utils/notionUtils'

export const Head: HeadFC = () => <title>Gumchidan</title>

const GumchidanPage: React.FC<PageProps> = () => {
  const nodes: INotionNode[] = useGetNotionQuery()
  const node = getGumchidanNode(nodes)

  return (
    <main>
      for gumchidan.
      {node && (
        <div>
          <span>{node.id}</span>
          <span>{node.title}</span>
        </div>
      )}
    </main>
  )
}

export default GumchidanPage
