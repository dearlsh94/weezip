import type { HeadFC, PageProps } from 'gatsby';

import * as React from 'react';

import '@scss/global.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import SEO from '@components/header/SEO';
import { Contents } from '@components/post';
import { useWeezipNotion } from '@hooks/useWeezipNotion';
import { MainLayout } from '@layout/main';
import { notionNodeToJson } from '@utils/notion';

import { NotionNode } from '@types';

export const Head: HeadFC = () => {
  return <SEO pathname="/intro" title={'노션 컴포넌트셋'} />;
};

const IntroPage: React.FC<PageProps> = () => {
  const { getNodeByUrl } = useWeezipNotion();
  const node: NotionNode | undefined = getNodeByUrl('/intro');
  const json = notionNodeToJson(node);
  return (
    <GlobalPortal.Provider>
      <MainLayout className="intro-layout">{node && <Contents childrens={json.children} />}</MainLayout>
    </GlobalPortal.Provider>
  );
};

export default IntroPage;
