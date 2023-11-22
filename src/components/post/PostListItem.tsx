import * as React from 'react';
import '@scss/components/PostListItem.scss';
import { NotionNode } from '@types';
import TagBadges from '@components/post/TagBadges';

interface Props {
  post: NotionNode;
}

const PostListItem = ({ post }: Props) => {
  const { notionColumn } = post;
  const remark = notionColumn?.remark || '';
  const lastEditedTime = notionColumn?.lastEditedTime || '';
  const createdTime = notionColumn?.createdTime || '';
  const tagNames = notionColumn?.tag?.map(t => t.name) || [];
  const series = notionColumn?.series;

  return (
    <div className={`post-list-item`}>
      {series && <span className="series">시리즈 [{series?.name}]</span>}
      <p>{remark}</p>
      <div className="info-box">
        <div className="tag-box">
          <TagBadges tagNames={tagNames} isLink={false} />
        </div>
        <div className="date-box">
          {createdTime && <span className="date">작성 : {createdTime}</span>}
          {lastEditedTime && <span className="date">수정 : {lastEditedTime}</span>}
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
