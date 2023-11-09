import { Children, MultiSelect, NotionColumn, NotionNode, RichText } from '@types';
import { convertDatetimeFormat } from './convertUtils';

export const notionNodeToJson = (node: NotionNode): Children => {
  return node ? JSON.parse(node?.json) : null;
};

export const getNodeJsonByUrl = (nodes: NotionNode[], url: string): Children | null => {
  const node = nodes.find(n => n.title === url);
  return node ? notionNodeToJson(node) : null;
};

const parseNotionColumn = (content: Children): NotionColumn => {
  const id = content?.properties?.id.unique_id?.number || -1;
  const remark = getPlainTextByRichText(content?.properties?.remark?.rich_text);
  const last_edited_item = content?.properties?.edited_date?.date?.start || '';
  const created_time = content?.properties?.created_date?.date?.start || '';
  const notionUrl = content?.url || '';
  const tag = content?.properties?.tag?.multi_select || [];
  const series = content?.properties?.series?.select;

  return {
    id,
    remark,
    lastEditedTime: convertDatetimeFormat(last_edited_item),
    createdTime: convertDatetimeFormat(created_time),
    notionUrl,
    tag,
    series,
  };
};

export const getParseListByNodes = (nodes: NotionNode[]): NotionNode[] => {
  return nodes
    .filter((node: NotionNode) => node.title.startsWith('/post'))
    .map((node: NotionNode) => {
      node.notionColumn = parseNotionColumn(notionNodeToJson(node));
      return node;
    });
};

export const classifyPost = (
  nodes: NotionNode[]
): {
  postTags: string[];
  postSeries: MultiSelect;
} => {
  const postTagSet = new Set();
  const postSeries: MultiSelect = [];
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

export const getPlainTextByRichText = (richText?: RichText): string => {
  return richText?.reduce((str, cur) => (str += cur.plain_text), '') || '';
};
