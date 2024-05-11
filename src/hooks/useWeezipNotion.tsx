import { graphql, useStaticQuery } from 'gatsby';

import { useMemo } from 'react';

import { NAMES } from '@src/constants';
import { classifyPost, notionNodeToJson, parseNotionColumn } from '@utils/notion';

import { NotionNode } from '@types';

export const useWeezipNotion = () => {
  const data = useStaticQuery(graphql`
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

  const memoized = useMemo(() => {
    const nodes: NotionNode[] = data?.allNotion?.edges?.map(({ node }: { node: NotionNode }) => {
      if (node.databaseName.toUpperCase() === NAMES.SITE.toUpperCase()) {
        return node;
      }
    });
    const posts: NotionNode[] = nodes
      .filter((node: NotionNode) => node.title.startsWith('/post'))
      .map((node: NotionNode) => {
        node.notionColumn = parseNotionColumn(notionNodeToJson(node));
        return node;
      })
      .sort((a, b) => Date.parse(b.notionColumn.createdTime) - Date.parse(a.notionColumn.createdTime));

    const { everyPostsTags, everyPostsSeries } = classifyPost(posts);

    return {
      data,
      nodes,
      posts,
      everyPostsTags,
      everyPostsSeries,
      getNodeByUrl: (url: string) => nodes.find(node => node.title === url),
    };
  }, [data]);

  return memoized;
};
