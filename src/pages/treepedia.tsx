import { HeadFC, PageProps, graphql } from 'gatsby';

import * as React from 'react';

import '@scss/global.scss';
import '@scss/pages/TreepediaPage.scss';

import SEO from '@components/header/SEO';
import { PostsFilter, ResetDivider } from '@components/post';
import { TreepediaPosts } from '@components/treepedia';
import { Caution } from '@components/ui';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';
import { NAMES } from '@src/constants';
import { paths } from '@utils/url';

export const Head: HeadFC = () => {
  return (
    <SEO
      description={`책을 읽고 영화를 보고 한줄평과 별점, 후기를 작성해요.`}
      pathname={paths.posts()}
      title={`트리피디아 글 목록`}
    >
      <link href={`https://weezip.treefeely.com${paths.posts()}`} rel="canonical" />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = () => {
  const { posts } = useWeezipNotion();
  const lists = posts.filter(post => post.notionColumn?.series?.name === NAMES.TREEPEDIA);

  return (
    <MainLayout className="treepedia-layout">
      <section className="treepedia-layout__header">
        <PostsFilter />
        <ResetDivider />
      </section>
      <Caution>
        블로그에 발행한 후기만 보여지고 있어요.
        <br />
        모든 후기가 보일 수 있도록 준비중이에요.
      </Caution>
      <p className="desc">
        총 <em>{lists.length}</em>건의 후기가 있어요.
      </p>
      <TreepediaPosts posts={lists} />
    </MainLayout>
  );
};

export const postQuery = graphql`
  query {
    allNotion {
      edges {
        node {
          id
          databaseName
          title
          json
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default ListPage;
