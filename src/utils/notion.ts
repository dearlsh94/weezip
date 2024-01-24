import { convertDatetimeFormat } from './converter';

import { NotionChildrenType, MultiSelect, NotionColumn, NotionNode, RichText } from '@types';

export const notionNodeToJson = (node: NotionNode | undefined): NotionChildrenType => {
  return node ? JSON.parse(node?.json) : undefined;
};

export const parseNotionColumn = (content: NotionChildrenType): NotionColumn => {
  const { id, url, remark, created_date, edited_date, series, tag } = content.properties;

  return {
    id: id.unique_id.number || -1,
    remark: getPlainTextByRichText(remark.rich_text),
    lastEditedTime: convertDatetimeFormat(edited_date.date.start || ''),
    createdTime: convertDatetimeFormat(created_date.date.start || ''),
    notionUrl: url.title.plain_text || '',
    tag: tag.multi_select || [],
    series: series.select,
  };
};

export const classifyPost = (
  nodes: NotionNode[]
): {
  everyPostsTags: string[];
  everyPostsSeries: MultiSelect;
} => {
  const postTagSet = new Set();
  const everyPostsSeries: MultiSelect = [];
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
          everyPostsSeries.push(json.properties?.series?.select);
        }
      }
    }
  });

  return {
    everyPostsTags: Array.from(postTagSet) as string[],
    everyPostsSeries,
  };
};

export const getPlainTextByRichText = (richText?: RichText): string => {
  return richText?.reduce((str, cur) => (str += cur.plain_text), '') || '';
};
