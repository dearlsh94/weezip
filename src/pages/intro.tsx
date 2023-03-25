import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { getContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import MainLayout from '../layout/MainLayout'
import { NotionContext } from '../store/rootStore'
import MyHead from '../components/MyHead'

export const Head: HeadFC = () => <MyHead title="Intro" />

const IndexPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const content: Children | null = getContentNode(nodes, '/intro')
  console.log({ content })
  return (
    <NotionContext.Provider value={nodes}>
      <MainLayout>
        <main>{content && <ContentWrapper childrens={content.children} />}</main>
      </MainLayout>
    </NotionContext.Provider>
  )
}

export default IndexPage
