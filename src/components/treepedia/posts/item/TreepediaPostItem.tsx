import * as React from 'react';

import './TreepediaPostItem.scss';
import { TitleDescription } from '@components/post';
import { Linker } from '@components/ui';
import { ARIA_LABEL } from '@src/constants';
import { getPlainTextByRichText, notionNodeToJson } from '@utils/notion';

import { BlockType, NotionNode } from '@types';

interface TreepediaPostItemProps {
  post: NotionNode;
}

export default function TreepediaPostItem({ post }: TreepediaPostItemProps) {
  const content = notionNodeToJson(post);
  const title = getPlainTextByRichText(content?.properties?.remark?.rich_text);

  const getDescriptionText = (header2Name: '한줄평' | '별점'): string => {
    const h2PrefaceIndex = content?.children?.findIndex(
      c => c.type === 'heading_2' && c.heading_2?.rich_text[0]?.plain_text === header2Name
    );

    if (0 <= h2PrefaceIndex && h2PrefaceIndex + 1 < content.children.length) {
      const h2Preface = content?.children[h2PrefaceIndex + 1];
      if (h2Preface?.type === BlockType.PARAGRAPH) {
        return `${h2Preface.paragraph.rich_text[0]?.plain_text}`;
      }
    }

    return '';
  };

  const desc = getDescriptionText('한줄평');
  const star = getDescriptionText('별점');

  return (
    <li className="treepedia-post">
      <Linker label={`${title} 글 페이지로 ${ARIA_LABEL.MOVE}`} url={post.title}>
        <div className={`treepedia-post__content`}>
          {star && <span className={`star-${star.length}`}>{star}</span>}
          <strong>{title}</strong>
          {desc && <p>{desc}</p>}
          <TitleDescription
            createdDate={content?.properties?.created_date}
            editedDate={content?.properties?.edited_date}
            isShowTag={false}
            tag={content?.properties?.tag?.multi_select}
            useCopy={false}
          />
        </div>
      </Linker>
    </li>
  );
}
