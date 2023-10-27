import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import '@scss/global.scss';
import '@scss/page.scss';
import { useGetNotionQuery } from '@services/use-notion';
import MainLayout from '@layout/MainLayout';
import { NotionContext, PageContext } from '@store/rootStore';
import { INotionContext, NotionNode } from '@types';
import { parseLocationQuery } from '@utils/parseUtils';
import PostList from '@module/PostList';
import { classifyPost, getParseListByNodes } from '@utils/notionUtils';
import SEO from '@components/header/SEO';
import ListFilter from '@components/ListFilter';
import Divider from '@components/ui/Divider';
import { IconClearAll } from '@components/icon';
import { GlobalPortal } from '@components/GlobalPortal';
import { compareString } from '@utils/commonUtils';
import LoadSection from '@module/LoadSection';

export const Head: HeadFC = () => {
  return (
    <SEO title={`글 목록`} description={`Write, Explain, Edit, Zip`} pathname="/list/">
      <link rel="canonical" href={`https://weezip.freefeely.com/list/`} />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery();
  const parseList: NotionNode[] = getParseListByNodes(nodes).sort((a, b) =>
    a.notionColumn?.idx && b.notionColumn?.idx ? b.notionColumn?.idx - a.notionColumn?.idx : 0
  );
  const { postTags, postSeries } = classifyPost(parseList);
  const store: INotionContext = {
    nodes: nodes,
    postTags: postTags,
    postSeries: postSeries,
  };
  const PER_PAGE = 10;

  const [list, setList] = useState<NotionNode[]>([]);
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState('전체');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    filterReset();

    let _list: NotionNode[] = [];
    let _page = 1;
    let _lastPage = 1;

    if (props.location.search) {
      const { series, category, tag, page, keyword } = parseLocationQuery(props.location.search);

      _list = parseList.filter(post => {
        if (!post.title.startsWith('/post')) return false;

        if (category) {
          setFilterText(category || '');
          return compareString(post?.notionColumn?.category?.name, decodeURIComponent(category));
        } else if (series) {
          setFilterText(series || '');
          return compareString(post?.notionColumn?.series?.name, decodeURIComponent(series));
        } else if (tag) {
          setFilterText(`${tag} 태그`);
          return post?.notionColumn?.tag?.find(t => compareString(t.name, decodeURIComponent(tag)));
        } else if (keyword) {
          const searchText = decodeURIComponent(keyword).replaceAll(/ /g, '').toUpperCase();
          return post.notionColumn?.remark?.replaceAll(/ /g, '').toUpperCase().includes(searchText);
        }

        return true;
      });

      _lastPage = Math.ceil(_list.length / PER_PAGE);
      if (page) {
        _page = Math.min(page, _lastPage);
      }
    } else {
      _list = parseList;
      _lastPage = Math.ceil(_list.length / PER_PAGE);
    }

    loading();
    setCount(_list.length);
    setCurrentPage(_page);
    setLastPage(_lastPage);

    const indexOfLastPost = _page * PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - PER_PAGE;
    setList(_list.slice(indexOfFirstPost, indexOfLastPost));
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
      <PageContext.Provider value={props}>
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
              <PostList list={list} currentPage={currentPage} lastPage={lastPage} />
            </LoadSection>
          </MainLayout>
        </NotionContext.Provider>
      </PageContext.Provider>
    </GlobalPortal.Provider>
  );
};

export default ListPage;
