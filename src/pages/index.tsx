import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { findContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import { NotionContext } from '../store/rootStore'
import { INotionContext } from '../types'
import MainLayout from '../layout/MainLayout'
import SEO from '../components/header/SEO'

export const Head: HeadFC = () => {
  return <SEO />
}

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
  }
  const content: Children | null = findContentNode(nodes, '/')
  return (
    <NotionContext.Provider value={store}>
      <MainLayout className="index-layout">
        {content && <ContentWrapper childrens={content.children} align="center" />}
      </MainLayout>
    </NotionContext.Provider>
  )
}

export default IndexPage
