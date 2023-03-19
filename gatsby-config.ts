import type { GatsbyConfig } from 'gatsby'
import path from 'path'
import { NOTION_INTEGRATION_TOKEN, NOTION_DB_ID } from './src/constants/key'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ethan-web`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon-butterfly.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-notion-api',
      options: {
        token: NOTION_INTEGRATION_TOKEN,
        databaseId: NOTION_DB_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@services': path.resolve(__dirname, 'src/services'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@types': path.resolve(__dirname, 'src/types'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@scss': path.resolve(__dirname, 'src/scss'),
        },
        extensions: ['ts', 'tsx', 'js'],
      },
    },
  ],
}

export default config
