import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import '@scss/global.scss';
import '@scss/page.scss';
import { useGetNotionQuery } from '@services/use-notion';
import MainLayout from '@layout/MainLayout';
import { NotionContext } from '@store/rootStore';
import { INotionContext, NotionNode } from '@types';
import PostList from '@module/PostList';
import { classifyPost, getParseListByNodes } from '@utils/notionUtils';
import SEO from '@components/header/SEO';
import ListFilter from '@components/ListFilter';
import Divider from '@components/ui/Divider';
import { IconClearAll } from '@components/icon';
import { GlobalPortal } from '@components/GlobalPortal';
import LoadSection from '@module/LoadSection';
import { compareString } from '@utils/commonUtils';

export const Head: HeadFC = () => {
  return (
    <SEO title={`글 목록`} description={`Write, Explain, Edit, Zip`} pathname="/list">
      <link rel="canonical" href={`https://weezip.freefeely.com/list`} />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const params = new URLSearchParams(props.location.search);
  const nodes = useGetNotionQuery();
  const parseList: NotionNode[] = getParseListByNodes(nodes).sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  );
  const { postTags, postSeries } = classifyPost(parseList);
  const store: INotionContext = {
    nodes: nodes,
    postTags: postTags,
    postSeries: postSeries,
  };

  const [list, setList] = useState<NotionNode[]>([]);
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState('전체');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    filterReset();

    let _list: NotionNode[] = [];

    if (props.location.search) {
      _list = parseList.filter(post => {
        if (!post.title.startsWith('/post')) return false;

        if (params.has('series')) {
          const series = params.get('series') || '';
          setFilterText(series);
          return compareString(post?.notionColumn?.series?.name, series);
        } else if (params.has('tag')) {
          const tag = params.get('tag') || '';
          setFilterText(`${tag} 태그`);
          return post?.notionColumn?.tag?.find(t => compareString(t.name, decodeURIComponent(tag)));
        } else if (params.has('keyword')) {
          const keyword = params.get('keyword') || '';
          const searchText = decodeURIComponent(keyword).replaceAll(/ /g, '').toUpperCase();
          return post.notionColumn?.remark?.replaceAll(/ /g, '').toUpperCase().includes(searchText);
        }

        return true;
      });
    } else {
      _list = parseList;
    }

    loading();
    setCount(_list.length);
    setList(_list);
  }, [props.location]);

  const filterReset = () => {
    loading();
    setFilterText('전체');
  };

  const handleClearAll = () => {
    filterReset();
    navigate('/list');
  };

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  return (
    <GlobalPortal.Provider>
      <NotionContext.Provider value={store}>
        <MainLayout className="list-layout">
          <ListFilter />
          <div className={`info-box ${isLoading ? 'loading' : ''}`}>
            <IconClearAll handleClick={handleClearAll} />
            <div className="count-box ellipsis">
              {filterText && (
                <strong>
                  {filterText}
                  <span> | </span>
                </strong>
              )}
              총 <span>{count}</span>건{filterText !== '전체' && '의 검색결과'}
            </div>
          </div>
          <Divider color="primary" height={2} />
          <LoadSection isLoading={isLoading} isError={false}>
            <PostList list={list} />
          </LoadSection>
        </MainLayout>
      </NotionContext.Provider>
    </GlobalPortal.Provider>
  );
};

export default ListPage;
