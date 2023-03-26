import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory, getContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import { NotionContext, INotionContext } from '../store/rootStore'
import MainLayout from '../layout/MainLayout'
import MyHead from '../components/MyHead'

export const Head: HeadFC = () => <MyHead title="Home" />

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const content: Children | null = getContentNode(nodes, '/')
  console.log({ content })
  return (
    <NotionContext.Provider value={store}>
      <MainLayout>{content && <ContentWrapper childrens={content.children} />}</MainLayout>
    </NotionContext.Provider>
  )
}

export default IndexPage
