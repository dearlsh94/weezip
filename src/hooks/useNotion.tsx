import { NotionNode } from '@types';
import { classifyPost, notionNodeToJson, parseNotionColumn } from '@utils/notion';
import { graphql, useStaticQuery } from 'gatsby';

export const useNotion = (name: 'Weezip' = 'Weezip') => {
  const result = useStaticQuery(graphql`
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
  `);
  const nodes: NotionNode[] = result?.allNotion?.edges?.map(({ node }: { node: NotionNode }) => {
    if (node.databaseName === name) {
      return node;
    }
  });
  const posts: NotionNode[] = nodes
    .filter((node: NotionNode) => node.title.startsWith('/post'))
    .map((node: NotionNode) => {
      node.notionColumn = parseNotionColumn(notionNodeToJson(node));
      return node;
    })
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  const { everyPostsTags, everyPostsSeries } = classifyPost(posts);

  return {
    result,
    nodes,
    posts,
    everyPostsTags,
    everyPostsSeries,
    getNodeByUrl: (url: string) => nodes.find(node => node.title === url),
  };
};
