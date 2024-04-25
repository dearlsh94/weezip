import { HeadFC, PageProps } from 'gatsby';

import * as React from 'react';

import SEO from '@components/header/SEO';
import { LatestPost } from '@components/post';
import { Linker } from '@components/ui';
import { ARIA_LABEL } from '@src/constants';

export const Head: HeadFC = () => {
  return <SEO />;
};

const NotFoundPage: React.FC<PageProps> = () => {
  const mainStyles = {
    padding: '40px',
  };
  const contentStyles = {
    margin: '20px 0px',
  };

  return (
    <main style={mainStyles}>
      <h1>😔 Page not found</h1>
      <div style={contentStyles}>
        <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
        <p>Sorry. we couldn’t find what you were looking for.</p>
      </div>
      <div style={contentStyles}>
        <Linker label={`메인 페이지로 ${ARIA_LABEL.MOVE}`} url="/">
          Go Main
        </Linker>
      </div>
      <LatestPost />
    </main>
  );
};

export default NotFoundPage;
