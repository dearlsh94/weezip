import { NotionNode } from '@types';
import React from 'react';
import './PostsItem.scss';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notion';
import { Linker } from '@components/ui';
import { Series, TitleDescription } from '@components/post';

interface PostsItemProps {
  post: NotionNode;
}
export default function PostsItem({ post }: PostsItemProps) {
  const content = notionNodeToJson(post);
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);

  return (
    <li>
      <Linker url={post.title} aria-label={`${post.title} 글 보기`}>
        <div className={`posts-item`}>
          <div className="posts-item__title">
            {content?.properties?.series?.select && <Series series={content?.properties?.series?.select} />}
            <p>{title}</p>
          </div>
          <TitleDescription
            tag={content?.properties?.tag?.multi_select}
            createdDate={content?.properties?.created_date}
            editedDate={content?.properties?.edited_date}
            useCopy={false}
          />
        </div>
      </Linker>
    </li>
  );
}
