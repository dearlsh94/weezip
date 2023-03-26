import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory } from '../utils/notionUtils'
import MainLayout from '../layout/MainLayout'
import { NotionContext, INotionContext, PageContext } from '../store/rootStore'
import MyHead from '../components/MyHead'
import { parseLocationQuery } from '../utils/parseUtils'
import PostList from '../module/PostList'

export const Head: HeadFC = () => <MyHead title="게시글 목록" />

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
