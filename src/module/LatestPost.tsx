import * as React from 'react';
import '@scss/module/LatestPost.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { NotionNode } from '@types';
import { getParseListByNodes } from '@utils/notionUtils';
import Linker from '@components/ui/Linker';
import { IconArrow } from '@components/icon';
import TagBadges from '@components/post/TagBadges';

export default function LatestPost() {
  const nodes = useGetNotionQuery();

  const parseList: NotionNode[] = getParseListByNodes(nodes);
  parseList.sort((a, b) => {
    if (a.notionColumn?.createdTime && b.notionColumn?.createdTime) {
      return a.notionColumn?.createdTime > b.notionColumn?.createdTime ? -1 : 1;
    } else {
      return 0;
    }
  });

  return (
    <section className="latest-post">
      <div className="latest-post__title">
        <h2>최근 포스트</h2>
        <Linker url={'/list'} aria-label="전체 목록 보기">
          전체보기
          <IconArrow direction="right" size={14} color={'primary'} />
        </Linker>
      </div>
      <ul>
        {parseList.slice(0, 6).map(post => {
          return (
            <li key={`latest-post-${post.id}`}>
              <Linker url={post.title} aria-label={`${post.notionColumn.remark} 글 보기`}>
                <p>{post.notionColumn?.remark}</p>
                {post.notionColumn.tag && (
                  <TagBadges tagNames={post.notionColumn.tag.map(t => t.name)} isLink={false} />
                )}
                <div className="corner" />
                <IconArrow size={12} color={'base'} direction="right" />
              </Linker>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
