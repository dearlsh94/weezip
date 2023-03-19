import { useStaticQuery, graphql } from 'gatsby'
import { INotionNode } from '../types'

export const getNotionQuery = graphql`
  query {
    allNotion {
      edges {
        node {
          archived
          children {
            id
          }
          createdAt
          id
          internal {
            content
          }
          json
          markdownString
          parent {
            id
            internal {
              content
            }
          }
          raw {
            archived
            children {
              id
            }
            created_by {
              id
            }
            created_time
            id
            last_edited_by {
              id
            }
            last_edited_time
            object
            parent {
              database_id
              type
            }
            url
          }
          title
          updatedAt
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
