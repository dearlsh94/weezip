import { Children, NotionNode, Select } from '@types';

export const notionNodeToJson = (node?: NotionNode): Children => {
  return node ? JSON.parse(node?.json) : null;
};

export const getNodeJsonByUrl = (nodes: NotionNode[], url: string): Children | null => {
  const node = nodes.find(n => n.title === url);
  return notionNodeToJson(node);
};

export const classifyPost = (
  nodes: NotionNode[]
): {
  postTags: string[];
  postSeries: Select[];
} => {
  const postTagSet = new Set();
  const postSeries: Select[] = [];
  const includeSeriesName: string[] = [];

  nodes.map(node => {
    if (node?.title?.toUpperCase()?.includes('POST')) {
      const json = notionNodeToJson(node);
      if (!node.title.startsWith('/post')) return;

      json.properties?.tag?.multi_select?.map(v => {
        postTagSet.add(v.name);
      });

      if (json.properties?.series?.select) {
        if (!includeSeriesName.includes(json.properties?.series?.select.name)) {
          includeSeriesName.push(json.properties?.series?.select.name);
          postSeries.push(json.properties?.series?.select);
        }
      }
    }
  });

  return {
    postTags: Array.from(postTagSet) as string[],
    postSeries,
  };
};

/**
 * @param url : /post/{id} 형태의 URL. id는 series-type-number로 되어 있다.
 * @returns series code
 */
export const getSeriesCodeByURL = (url: string) => {
  const pattern = /\b\d{2}(?=-\d{2}-\d+)/;
  const match = url.match(pattern);
  if (match) {
    return match[0]; // seriesCode
  } else {
    return 0;
  }
};
