import { HeadFC, PageProps } from 'gatsby';

import * as React from 'react';

import '@scss/global.scss';
import '@scss/pages/TreepediaPage.scss';

import SEO from '@components/header/SEO';
import { PostsFilter, ResetDivider } from '@components/post';
import { Caution, MyButton } from '@components/ui';
import { ButtonColor, ButtonSize, ButtonType } from '@components/ui/button/MyButton';
import { MainLayout } from '@layout/main';
import { paths } from '@utils/url';

export const Head: HeadFC = () => {
  return (
    <SEO
      description={`이제 브런치에서 책을 읽고 영화를 보고 한줄평과 별점, 후기를 작성해요.`}
      pathname={paths.treepedia()}
      title={`트리피디아`}
    >
      <link href={`https://treefeely.com${paths.treepedia()}`} rel="canonical" />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = () => {
  return (
    <MainLayout className="treepedia-layout">
      <section className="treepedia-layout__header">
        <PostsFilter />
        <ResetDivider />
      </section>
      <Caution>2024년 10월부터 트리피디아 콘텐츠는 브런치에서 포스팅하고 있습니다.</Caution>
      <MyButton
        color={ButtonColor.PRIMARY}
        size={ButtonSize.PRIMARY}
        type={ButtonType.BORDER}
        width={'100%'}
        onClick={() => window.open('https://brunch.co.kr/magazine/treepedia', '_blank')}
      >
        브런치 바로가기
      </MyButton>
    </MainLayout>
  );
};

export default ListPage;
