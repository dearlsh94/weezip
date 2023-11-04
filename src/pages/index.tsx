import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import '@scss/global.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { getNodeJsonByUrl } from '@utils/notionUtils';
import { Children, INotionContext } from '@types';
import ContentWrapper from '@module/ContentWrapper';
import { NotionContext } from '@store/rootStore';
import MainLayout from '@layout/MainLayout';
import SEO from '@components/header/SEO';
import LatestPost from '@module/LatestPost';
import Divider from '@components/ui/Divider';
import { GlobalPortal } from '@components/GlobalPortal';

export const Head: HeadFC = () => {
  return <SEO />;
};

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery();
  const store: INotionContext = {
    nodes: nodes,
  };
  const content: Children | null = getNodeJsonByUrl(nodes, '/home');
  return (
    <GlobalPortal.Provider>
      <NotionContext.Provider value={store}>
        <MainLayout className="index-layout">
          <LatestPost />
          <Divider />
          {content && <ContentWrapper childrens={content.children} align="center" />}
          <div className="logo-box">
            <img src="/static/images/Tesseract-Logo-128x128.png" alt="Weezip Logo" />
          </div>
        </MainLayout>
      </NotionContext.Provider>
    </GlobalPortal.Provider>
  );
};

export default IndexPage;
