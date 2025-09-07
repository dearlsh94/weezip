import { type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as React from 'react';

import '@scss/global.scss';
import '@scss/pages/IndexPage.scss';

import Deprecated from '@components/Deprecated';
import { Snowflakes } from '@components/animation';
import SEO from '@components/header/SEO';
import { Contents, LatestPost } from '@components/post';
import { FloatBox } from '@components/ui';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';
import { notionNodeToJson } from '@utils/notion';

import { NotionNode } from '@types';

export const Head: HeadFC = () => {
  return <SEO />;
};

const IndexPage: React.FC<PageProps> = () => {
  const { getNodeByUrl } = useWeezipNotion();
  const node: NotionNode | undefined = getNodeByUrl('/');
  const json = notionNodeToJson(node);
  return (
    <MainLayout className="index-layout">
      <Deprecated />
      <LatestPost />
      <div className="introduce">{node && <Contents childrens={json.children} />}</div>
      <div className="logo-box">
        <StaticImage alt="Weezip Logo" src="../images/Tesseract-Logo-256x256.png" width={128} />
      </div>
      <Snowflakes />
      <FloatBox useSnowflake />
    </MainLayout>
  );
};

export default IndexPage;
