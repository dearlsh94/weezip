import * as React from 'react';
import '@scss/module/LatestPost.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { NotionNode } from '@types';
import { getParseListByNodes } from '@utils/notionUtils';
import Linker from '@components/ui/Linker';
import { IconArrow } from '@components/icon';

const LatestPost = () => {
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
    <section id="latest-post">
      <div className="title-box">
        <h2>최근 포스트</h2>
        <span className="link">
          <Linker url={'/list'} aria-label="전체 목록 보기">
            전체보기
            <IconArrow direction="right" size={8} color={'primary'} />
          </Linker>
        </span>
      </div>
      <ul>
        {parseList.slice(0, 5).map(post => {
          return (
            <li className="post-item" key={`latest-post-${post.id}`}>
              <Linker url={post.title} aria-label={`${post.title} 글 보기`}>
                {post.notionColumn?.remark}
              </Linker>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LatestPost;
