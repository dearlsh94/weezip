import { Children, NotionColumn } from '@types';
import { convertDatetimeFormat } from './convertUtils';
import { getPlainTextByRichText } from './notionUtils';

export const parseLocationQuery = (search = '') => {
  let params = search.replace('?', '').split('&');
  let res: { [key: string]: any } = {};
  params.forEach(p => {
    let keyValue = p.split('=');
    const key = keyValue[0];
    const value = keyValue[1];

    // 중복 key가 있으면 배열로 저장
    if (res[key]) {
      if (Array.isArray(res[key])) {
        res[key].push(value);
      } else {
        res[key] = [res[key], value];
      }
    } else {
      res[key] = decodeURIComponent(value);
    }
  });
  return res;
};

export const parseNotionColumn = (content: Children): NotionColumn => {
  const idx = content?.properties?.idx?.number || -1;
  const remark = getPlainTextByRichText(content?.properties?.remark?.rich_text);
  const last_edited_item = content?.properties?.edited_date?.date?.start || '';
  const created_time = content?.properties?.created_date?.date?.start || '';
  const notionUrl = content?.url || '';
  const category = content?.properties?.category?.select;
  const tag = content?.properties?.tag?.multi_select || [];
  const series = content?.properties?.series?.select;

  return {
    idx,
    remark,
    category,
    lastEditedTime: convertDatetimeFormat(last_edited_item),
    createdTime: convertDatetimeFormat(created_time),
    notionUrl,
    tag,
    series,
  };
};
