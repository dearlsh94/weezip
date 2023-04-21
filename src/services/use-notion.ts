import { useStaticQuery, graphql } from 'gatsby'
import { NotionNode } from '../types'

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
  const res = useStaticQuery(getNotionQuery)
  return parseNotion(res)
}

export const parseNotion = (res: any) => {
  const rows = res?.allNotion?.edges
  let nodes: NotionNode[] = []
  rows.forEach(({ node }: { node: NotionNode }) => {
    nodes.push(node)
  })
  // url 길이 순으로 정렬
  nodes.sort((a, b) => (a.title?.length > b.title?.length ? 1 : -1))
  return nodes
}
