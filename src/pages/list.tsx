import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/PostsPage.scss';
import { getNotionNodeAll } from '@services/use-notion';
import MainLayout from '@layout/main';
import { NotionContext } from '@store/rootStore';
import { INotionContext, NotionNode } from '@types';
import { classifyPost, getParseListByNodes } from '@utils/notionUtils';
import SEO from '@components/header/SEO';
import Divider from '@components/ui/divider';
import { GlobalPortal } from '@components/GlobalPortal';
import { compareString } from '@utils/common';
import PostsFilter from '@components/post/list/filter';
import LoadSection from '@components/ui/loadSection';
import Posts from '@components/post/list';
import PostsDescription from '@components/post/list/description';
import { getParamValue } from '@utils/url';

export const Head: HeadFC = () => {
  return (
    <SEO title={`글 목록`} description={`Write, Explain, Edit, Zip`} pathname="/list">
      <link rel="canonical" href={`https://weezip.treefeely.com/list`} />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = ({ data, location }) => {
  const params = new URLSearchParams(location.search);
  const nodes = getNotionNodeAll(data);
  const parseList: NotionNode[] = getParseListByNodes(nodes).sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  );
  const { everyPostsTags, everyPostsSeries } = classifyPost(parseList);
  const store: INotionContext = {
    nodes: nodes,
    everyPostsTags: everyPostsTags,
    everyPostsSeries: everyPostsSeries,
  };

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
      _list = parseList.filter(post => {
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
      _list = parseList;
    }

    setList(_list);
  };

  const checkFilter = () => {
    setFilterText(series || tag || decodeURIComponent(keyword).replaceAll(/ /g, '').toUpperCase() || '전체');
  };

  return (
    <GlobalPortal.Provider>
      <NotionContext.Provider value={store}>
        <MainLayout className="posts-layout">
          <section className="posts-layout__header">
            <PostsFilter />
            <PostsDescription isLoading={isLoading} length={list.length} filteredText={filterText} />
          </section>
          <Divider color="primary" height={2} />
          <LoadSection isLoading={isLoading} isError={false}>
            <Posts list={list} />
          </LoadSection>
        </MainLayout>
      </NotionContext.Provider>
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
