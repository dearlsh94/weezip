import React from 'react';

import './PostsItem.scss';
import { Series, TitleDescription } from '@components/post';
import { Linker } from '@components/ui';
import { ARIA_LABEL } from '@src/constants';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notion';

import { NotionNode } from '@types';

interface PostsItemProps {
  post: NotionNode;
}
export default function PostsItem({ post }: PostsItemProps) {
  const content = notionNodeToJson(post);
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);

  return (
    <li>
      <Linker label={`${title} 글 페이지로 ${ARIA_LABEL.MOVE}`} url={post.title}>
        <div className={`posts-item`}>
          <div className="posts-item__title">
            {content?.properties?.series?.select && <Series series={content?.properties?.series?.select} />}
            <p>{title}</p>
          </div>
          <TitleDescription
            createdDate={content?.properties?.created_date}
            editedDate={content?.properties?.edited_date}
            tag={content?.properties?.tag?.multi_select}
            useCopy={false}
          />
        </div>
      </Linker>
    </li>
  );
}
