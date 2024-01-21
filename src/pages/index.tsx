import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/IndexPage.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { getNodeJsonByUrl } from '@utils/notion';
import { NotionChildrenType } from '@types';
import { Contents, LatestPost } from '@components/post';
import { NotionContextProps, NotionContext } from '@store/context';
import SEO from '@components/header/SEO';
import { GlobalPortal } from '@components/GlobalPortal';
import { StaticImage } from 'gatsby-plugin-image';
import { Divider, FloatBox } from '@components/ui';
import { MainLayout } from '@layout/main';
import { Snowflakes } from '@components/animation';

export const Head: HeadFC = () => {
  return <SEO />;
};

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery();
  const store: NotionContextProps = {
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
      <Snowflakes />
      <FloatBox useSnowflake />
    </GlobalPortal.Provider>
  );
};

export default IndexPage;
