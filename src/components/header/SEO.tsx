import * as React from 'react';
import { useSiteMetadata } from '@services/use-site-metadata';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  thumbnail?: string;
  children?: React.ReactNode;
  keywords?: string[];
}

const SEO = ({ title, description, pathname, thumbnail, children, keywords = [] }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

  const seo = {
    title: `${title ? `${title} | ` : ``}${defaultTitle}`,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="content-language" content="kr" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={['treefeely', 'weezip', ...keywords]?.join(', ')} />

      <meta property="og:type" content={'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={'Weezip'} />
      <meta property="og:locale" content={'ko_KR'} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:url" content={seo.url} />

      {/* <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      /> */}

      {thumbnail && (
        <>
          <meta name="image" content={thumbnail} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:image:width" content={'1200'} />
          <meta property="twitter:image" content={thumbnail} />
        </>
      )}
      {children}
    </>
  );
};

export default SEO;
