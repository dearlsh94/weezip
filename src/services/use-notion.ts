import { useStaticQuery, graphql } from 'gatsby'
import { INode } from '../types/notionTypes'

export const getNotionQuery = graphql`
  query {
    allNotion {
      edges {
        node {
          id
          title
          archived
          createdAt
          updatedAt
          raw {
            id
          }
        }
      }
    }
  }
`

export const useGetNotionQuery = () => {
  console.log('run useGetNotionQuery')
  const res = useStaticQuery(getNotionQuery)
  const rows = res?.allNotion?.edges
  let nodes: INode[] = []
  rows.forEach(({ node }: { node: INode }) => {
    nodes.push(node)
  })
  console.log({ nodes })
  return nodes
}
