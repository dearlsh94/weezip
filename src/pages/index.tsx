import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/IndexPage.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { getNodeJsonByUrl } from '@utils/notionUtils';
import { Children, INotionContext } from '@types';
import ContentWrapper from '@components/post/contents';
import { NotionContext } from '@store/rootStore';
import MainLayout from '@layout/main';
import SEO from '@components/header/SEO';
import LatestPost from '@module/LatestPost';
import Divider from '@components/ui/Divider';
import { GlobalPortal } from '@components/GlobalPortal';
import { StaticImage } from 'gatsby-plugin-image';
import Snowflakes from '@components/Snowflakes';
import FloatBox from '@components/ui/FloatBox';

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
          <div className="introduce">{content && <ContentWrapper childrens={content.children} />}</div>
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
