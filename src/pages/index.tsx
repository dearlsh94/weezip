import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/IndexPage.scss';
import { NotionNode } from '@types';
import { Contents, LatestPost } from '@components/post';
import SEO from '@components/header/SEO';
import { GlobalPortal } from '@components/GlobalPortal';
import { StaticImage } from 'gatsby-plugin-image';
import { Divider, FloatBox } from '@components/ui';
import { MainLayout } from '@layout/main';
import { Snowflakes } from '@components/animation';
import { useWeezipNotion } from '@src/hooks/useWeezipNotion';
import { notionNodeToJson } from '@utils/notion';

export const Head: HeadFC = () => {
  return <SEO />;
};

const IndexPage: React.FC<PageProps> = () => {
  const { getNodeByUrl } = useWeezipNotion();
  const node: NotionNode | undefined = getNodeByUrl('/home');
  const json = notionNodeToJson(node);
  return (
    <GlobalPortal.Provider>
      <MainLayout className="index-layout">
        <LatestPost />
        <Divider />
        <div className="introduce">{node && <Contents childrens={json.children} />}</div>
        <div className="logo-box">
          <StaticImage src="../images/Tesseract-Logo-256x256.png" alt="Weezip Logo" width={128} />
        </div>
      </MainLayout>
      <Snowflakes />
      <FloatBox useSnowflake />
    </GlobalPortal.Provider>
  );
};

export default IndexPage;
