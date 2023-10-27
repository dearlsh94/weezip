import { useStaticQuery, graphql } from 'gatsby';
import { NotionNode } from '@types';

export const getNotionQuery = graphql`
  query {
    allNotion {
      edges {
        node {
          id
          databaseName
          title
          json
          createdAt
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
  return rows.map(({ node }: { node: NotionNode }) => {
    if (node.databaseName === 'Weezip') {
      return node;
    }
  });
};

export const getNotionNodeByUrl = (res: any, url: string) => {
  return res?.allNotion?.edges?.find(({ node }: { node: NotionNode }) => {
    return node.title === url;
  })?.node;
};
