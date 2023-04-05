import * as React from 'react'
import { useEffect, useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/page.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory, findContentNode } from '../utils/notionUtils'
import MainLayout from '../layout/MainLayout'
import { NotionContext, INotionContext, PageContext } from '../store/rootStore'
import MyHead from '../components/MyHead'
import { parseLocationQuery } from '../utils/parseUtils'
import { Children } from '../types'
import ContentWrapper from '../module/ContentWrapper'
import HeaderIndexList from '../components/HeaderIndexList'

export const Head: HeadFC = () => <MyHead title="게시글 목록" />

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const { id } = parseLocationQuery(props.location.search)
  const content: Children | null = findContentNode(nodes, `/post?id=${id}`)
  const [indexList, setIndexList] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const elHeaders = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = []
      elHeaders.forEach(el => {
        headers.push(el)
      })
      setIndexList(headers)
    }
  }, [])

  console.log(content)
  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout>
          <div>
            <p className="title">{content?.properties?.remark.rich_text || ''}</p>
            <p>작성일 : {content?.properties?.created_date?.date.start}</p>
            <p>수정일 : {content?.properties?.edited_date?.date.start}</p>
          </div>
          <div className="index-box">{indexList && indexList?.length > 0 && <HeaderIndexList list={indexList} />}</div>
          {content && <ContentWrapper childrens={content.children} />}
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
