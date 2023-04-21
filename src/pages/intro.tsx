import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory, findContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import MainLayout from '../layout/MainLayout'
import { NotionContext } from '../store/rootStore'
import { INotionContext } from '../types'
import SEO from '../components/header/SEO'

export const Head: HeadFC = () => {
  return <SEO title={`노션 데이터셋`} description={`노션 컴포넌트 마이그레이션을 위한 데이터셋`} />
}

const IntroPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const content: Children | null = findContentNode(nodes, '/intro')
  console.log({ content })
  return (
    <NotionContext.Provider value={store}>
      <MainLayout>{content && <ContentWrapper childrens={content.children} />}</MainLayout>
    </NotionContext.Provider>
  )
}

export default IntroPage
