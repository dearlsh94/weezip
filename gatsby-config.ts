import type { GatsbyConfig } from 'gatsby';

// Handle Environment Variables
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = 'https://weezip.treefeely.com';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Weezip',
    description: '글 쓰는 프런트엔드 개발자 블로그. 편하고 예쁜 걸 좋아합니다.',
    siteUrl: siteUrl,
  },
  graphqlTypegen: true,
  // For to check not available during SSR
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  trailingSlash: 'never',
  plugins: [
    `gatsby-plugin-netlify`,
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@layout': 'src/layout',
          '@module': 'src/module',
          '@pages': 'src/pages',
          '@scss': 'src/scss',
          '@services': 'src/services',
          '@store': 'src/store',
          '@hooks': 'src/hooks',
          '@types': 'src/types',
          '@utils': 'src/utils',
          '@images': 'src/images',
          '@src': 'src',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          allNotion {
            edges {
              node {
                id
                title
              }
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allNotion: { edges: allPages } }: any) => {
          return allPages
            .filter((edge: any) => edge.node.title)
            .map((edge: any) => {
              return { ...edge.node, path: edge.node.title };
            });
        },
        serializer: (props: any) => {
          return {
            url: `${props.title}`,
            changefreq: 'daily',
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/Tesseract-Logo-BG-512x512.png',
      },
    },
    {
      resolve: 'gatsby-source-notion-feely',
      options: {
        token: process.env.NOTION_INTEGRATION_TOKEN,
        databases: [
          {
            id: process.env.NOTION_DB_ID,
            name: 'Weezip',
            pageFilter: {
              property: 'is_published',
              checkbox: {
                equals: true,
              },
            },
            option: {
              isIncludeChildren: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-P2302ZLGPV', // Google Analytics / GA
          // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: 'OPT_CONTAINER_ID',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: 'YOUR_SELF_HOSTED_ORIGIN',
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 1000,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: `ca-pub-1622942491482378`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
        stripQueryString: true,
      },
    },
  ],
};

export default config;
