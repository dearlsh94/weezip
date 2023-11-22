import * as React from 'react';
import Linker from '@components/ui/Linker';
import PostListItem from '@components/post/PostListItem';
import '@scss/module/PostList.scss';
import { NotionNode } from '@types';
import { navigate } from 'gatsby';
import { IconClearAll } from '@components/icon';
import PostPagination from '@components/post/PostPagination';
import usePagination from '@src/hooks/usePagination';

interface PostListProps {
  list: NotionNode[];
}

const PostList = ({ list }: PostListProps) => {
  const pagination = usePagination({
    perPage: 10,
    totalCount: list.length,
  });
  const { indexOfFirstItem, indexOfLastItem } = pagination;
  const posts = list.slice(indexOfFirstItem, indexOfLastItem);

  const handleReset = () => {
    navigate('/list');
  };

  return (
    <>
      {posts.length === 0 && (
        <div className="post-list-empty-box">
          <p>검색 결과가 없습니다.</p>
          <p>전체 글들을 둘러보는 건 어떠세요 ?</p>
          <span onClick={handleReset}>
            <IconClearAll size={16} />
            전체글 보러가기
          </span>
        </div>
      )}
      {posts?.length > 0 && (
        <ul className={`post-list-box`}>
          {posts.map(post => {
            return (
              <li key={`post-list-${post.id}`}>
                <Linker url={post.title} aria-label={`${post.title} 글 보기`}>
                  <PostListItem post={post} />
                </Linker>
              </li>
            );
          })}
        </ul>
      )}
      {posts?.length > 0 && <PostPagination pagination={pagination} />}
    </>
  );
};

export default PostList;
