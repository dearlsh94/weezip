import { useStaticQuery, graphql } from 'gatsby'
import { INotionNode } from '@types'

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
  let nodes: INotionNode[] = []
  rows.forEach(({ node }: { node: INotionNode }) => {
    nodes.push(node)
  })
  console.log({ nodes })
  return nodes
}
