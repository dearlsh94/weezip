import { type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as React from 'react';

import '@scss/global.scss';
import '@scss/pages/IndexPage.scss';

import { GlobalPortal } from '@components/GlobalPortal';
import { Snowflakes } from '@components/animation';
import SEO from '@components/header/SEO';
import { Contents, LatestPost } from '@components/post';
import { Divider, FloatBox } from '@components/ui';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';
import { notionNodeToJson } from '@utils/notion';

import { NotionNode } from '@types';

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
