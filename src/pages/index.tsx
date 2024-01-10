import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/IndexPage.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { getNodeJsonByUrl } from '@utils/notionUtils';
import { INotionContext, NotionChildrenType } from '@types';
import { Contents, LatestPost } from '@components/post';
import { NotionContext } from '@store/rootStore';
import SEO from '@components/header/SEO';
import { GlobalPortal } from '@components/GlobalPortal';
import { StaticImage } from 'gatsby-plugin-image';
import { Snowflake } from '@components/animation';
import { Divider, FloatBox } from '@components/ui';
import { MainLayout } from '@layout/main';

export const Head: HeadFC = () => {
  return <SEO />;
};

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery();
  const store: INotionContext = {
    nodes: nodes,
  };
  const content: NotionChildrenType | null = getNodeJsonByUrl(nodes, '/home');
  return (
    <GlobalPortal.Provider>
      <NotionContext.Provider value={store}>
        <MainLayout className="index-layout">
          <LatestPost />
          <Divider />
          <div className="introduce">{content && <Contents childrens={content.children} />}</div>
          <div className="logo-box">
            <StaticImage src="../images/Tesseract-Logo-256x256.png" alt="Weezip Logo" width={128} />
          </div>
        </MainLayout>
      </NotionContext.Provider>
      <Snowflake />
      <FloatBox useSnowflake />
    </GlobalPortal.Provider>
  );
};

export default IndexPage;
