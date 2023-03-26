import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory, findContentNode } from '../utils/notionUtils'
import MainLayout from '../layout/MainLayout'
import { NotionContext, INotionContext, PageContext } from '../store/rootStore'
import MyHead from '../components/MyHead'
import { parseLocationQuery } from '../utils/parseUtils'
import { Children } from '../types'
import ContentWrapper from '../module/ContentWrapper'

export const Head: HeadFC = () => <MyHead title="게시글 목록" />

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const { id } = parseLocationQuery(props.location.search)
  const content: Children | null = findContentNode(nodes, `/post?id=${id}`)
  console.log({ id, content })
  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout>{content && <ContentWrapper childrens={content.children} />}</MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
