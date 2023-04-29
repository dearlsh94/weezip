import * as React from 'react'
import { useSiteMetadata } from '@services/use-site-metadata'

interface Props {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
}

const SEO = ({ title, description, pathname, children }: Props) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content={'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={'Weezip'} />
      <meta property="og:locale" content={'ko_KR'} />
      {/* <meta property="og:image" content={''} /> */}
      {/* <meta property="og:image:width" content={''} /> */}
      {/* <meta property="og:image:height" content={''} /> */}
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:url" content={seo.url} />

      {/* <meta name="keywords" content={keywords} /> */}
      {/* <meta name="image" content={seo.image} /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {/* <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      /> */}
      {children}
    </>
  )
}

export default SEO
