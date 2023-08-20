import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '@scss/global.scss'
import { useGetNotionQuery } from '@services/use-notion'
import { getNodeJsonByUrl } from '@utils/notionUtils'
import { Children, INotionContext } from '@types'
import ContentWrapper from '@module/ContentWrapper'
import MainLayout from '@layout/MainLayout'
import { NotionContext } from '@store/rootStore'
import SEO from '@components/header/SEO'

export const Head: HeadFC = () => {
  return <SEO pathname="/intro/" title={'노션 컴포넌트셋'} />
}

const IntroPage: React.FC<PageProps> = () => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
  }
  const content: Children | null = getNodeJsonByUrl(nodes, '/intro/')
  return (
    <NotionContext.Provider value={store}>
      <MainLayout className="intro-layout">{content && <ContentWrapper childrens={content.children} />}</MainLayout>
    </NotionContext.Provider>
  )
}

export default IntroPage
