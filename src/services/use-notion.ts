import { useStaticQuery, graphql } from 'gatsby';
import { NotionNode } from '@types';

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
`;

export const useGetNotionQuery = () => {
  const res = useStaticQuery(getNotionQuery);
  return getNotionNodeAll(res);
};

export const getNotionNodeAll = (res: any) => {
  const rows = res?.allNotion?.edges;
  let nodes: NotionNode[] = [];
  rows.forEach(({ node }: { node: NotionNode }) => {
    nodes.push(node);
  });
  return nodes;
};

export const getNotionNodeByUrl = (res: any, url: string) => {
  return res?.allNotion?.edges?.find(({ node }: { node: NotionNode }) => {
    return node.title === url;
  })?.node;
};
