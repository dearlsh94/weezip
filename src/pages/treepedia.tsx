import { HeadFC, PageProps, graphql } from 'gatsby';

import * as React from 'react';

import '@scss/global.scss';
import '@scss/pages/TreepediaPage.scss';

import { GlobalPortal } from '@components/GlobalPortal';
import SEO from '@components/header/SEO';
import { PostsFilter, ResetDivider } from '@components/post';
import { TreepediaPosts } from '@components/treepedia';
import { Caution } from '@components/ui';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';

export const Head: HeadFC = () => {
  return (
    <SEO description={`Write, Explain, Edit, Zip`} pathname="/list" title={`글 목록`}>
      <link href={`https://weezip.treefeely.com/list`} rel="canonical" />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = () => {
  const { posts } = useWeezipNotion();
  const lists = posts.filter(post => post.notionColumn?.series?.name === '트리피디아');

  return (
    <GlobalPortal.Provider>
      <MainLayout className="treepedia-layout">
        <section className="treepedia-layout__header">
          <PostsFilter />
          <ResetDivider />
        </section>
        <Caution>
          블로그에 발행한 리뷰만 보여지고 있어요.
          <br />
          모든 리뷰가 보일 수 있도록 준비중이에요.
        </Caution>
        <p className="desc">
          총 <em>{lists.length}</em>건의 리뷰가 있어요.
        </p>
        <TreepediaPosts posts={lists} />
      </MainLayout>
    </GlobalPortal.Provider>
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
