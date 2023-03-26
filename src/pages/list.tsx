import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory, findContentNode } from '../utils/notionUtils'
import { Children } from '../types/contentType'
import ContentWrapper from '../module/ContentWrapper'
import MainLayout from '../layout/MainLayout'
import { NotionContext, INotionContext, PageContext } from '../store/rootStore'
import MyHead from '../components/MyHead'
import { parseLocationQuery } from '../utils/parseUtils'
import PostList from '../module/PostList'

export const Head: HeadFC = () => <MyHead title="Intro" />

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const { category } = parseLocationQuery(props.location.search)
  const list = store.categories[category] || []
  console.log({ list })
  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout>
          <PostList list={list} />
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
