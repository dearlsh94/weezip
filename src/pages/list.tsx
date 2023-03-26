import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory, getContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import MainLayout from '../layout/MainLayout'
import { NotionContext, INotionContext, PageContext } from '../store/rootStore'
import MyHead from '../components/MyHead'

export const Head: HeadFC = () => <MyHead title="Intro" />

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  console.log({ location })
  // const [category, setCategory] = useQueryParam('category', StringParam)
  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout>{/* {store.categories.} */}</MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
