import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '@scss/global.scss';
import { useGetNotionQuery } from '@services/use-notion';
import { getNodeJsonByUrl } from '@utils/notion';
import { NotionChildrenType, INotionContext } from '@types';
import { NotionContext } from '@store/rootStore';
import SEO from '@components/header/SEO';
import { GlobalPortal } from '@components/GlobalPortal';
import { MainLayout } from '@layout/main';
import { Contents } from '@components/post';

export const Head: HeadFC = () => {
  return <SEO pathname="/intro" title={'노션 컴포넌트셋'} />;
};

const IntroPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery();
  const store: INotionContext = {
    nodes: nodes,
  };
  const content: NotionChildrenType | null = getNodeJsonByUrl(nodes, '/intro');
  return (
    <GlobalPortal.Provider>
      <NotionContext.Provider value={store}>
        <MainLayout className="intro-layout">{content && <Contents childrens={content.children} />}</MainLayout>
      </NotionContext.Provider>
    </GlobalPortal.Provider>
  );
};

export default IntroPage;
