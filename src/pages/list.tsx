import { HeadFC, PageProps, graphql } from 'gatsby';

import * as React from 'react';
import { useEffect, useState } from 'react';

import '@scss/global.scss';
import '@scss/pages/PostsPage.scss';

import { GlobalPortal } from '@components/GlobalPortal';
import SEO from '@components/header/SEO';
import { Posts, PostsDescription, PostsFilter, ResetDivider } from '@components/post';
import { LoadContainer } from '@components/ui';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';
import { compareString } from '@utils/common';
import { getParamValue } from '@utils/url';

import { NotionNode } from '@types';

export const Head: HeadFC = () => {
  return (
    <SEO description={`Write, Explain, Edit, Zip`} pathname="/list" title={`글 목록`}>
      <link href={`https://weezip.treefeely.com/list`} rel="canonical" />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const { posts } = useWeezipNotion();

  const [list, setList] = useState<NotionNode[]>([]);
  const [filterText, setFilterText] = useState('전체');
  const [isLoading, setIsLoading] = useState(true);

  const series = getParamValue(params, 'series');
  const tag = getParamValue(params, 'tag');
  const keyword = getParamValue(params, 'keyword');

  useEffect(() => {
    checkFilter();
    checkFilteredList();
    setIsLoading(false);
  }, [location]);

  const checkFilteredList = () => {
    let _list: NotionNode[] = [];

    if (location.search) {
      _list = posts.filter(post => {
        if (series) {
          return compareString(post?.notionColumn?.series?.name, series);
        } else if (tag) {
          return post?.notionColumn?.tag?.find(t => compareString(t.name, decodeURIComponent(tag)));
        } else if (keyword) {
          return post.notionColumn?.remark?.replaceAll(/ /g, '').toUpperCase().includes(keyword);
        }
        return true;
      });
    } else {
      _list = posts;
    }

    setList(_list);
  };

  const checkFilter = () => {
    setFilterText(series || tag || decodeURIComponent(keyword).replaceAll(/ /g, '').toUpperCase() || '전체');
  };

  return (
    <GlobalPortal.Provider>
      <MainLayout className="posts-layout">
        <section className="posts-layout__header">
          <PostsFilter />
          <ResetDivider />
          <PostsDescription filteredText={filterText} isLoading={isLoading} length={list.length} />
        </section>
        <LoadContainer isError={false} isLoading={isLoading}>
          <Posts list={list} />
        </LoadContainer>
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
