import * as React from 'react'
import { useEffect, useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import { useGetNotionQuery } from '../services/use-notion'
import { classifyCategory } from '../utils/notionUtils'
import MainLayout from '../layout/MainLayout'
import { NotionContext, PageContext } from '../store/rootStore'
import { INotionContext, NotionNode } from '../types'
import { parseLocationQuery } from '../utils/parseUtils'
import PostList from '../module/PostList'
import { nodeToJson } from '../utils/notionUtils'
import { parseContentValue } from '../utils/parseUtils'
import SEO from '../components/header/SEO'

export const Head: HeadFC = () => {
  return (
    <SEO title={`게시글 목록`} description={`어떤 글이 있을까요?`}>
      {/* <link rel="canonical" href={`https://weezip.freefeely.com/list`} /> */}
    </SEO>
  )
}

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const [list, setList] = useState<NotionNode[]>([])
  const { category, series } = parseLocationQuery(props.location.search)

  useEffect(() => {
    const parseList: NotionNode[] = nodes.map(node => {
      const content = nodeToJson(node)
      const contentValue = parseContentValue(content)
      node.contentValue = contentValue
      return node
    })

    let l: NotionNode[] = []
    if (category) {
      l = store.categories[category] || parseList
    }

    if (series) {
      l.filter(post => {
        if (post.contentValue?.series) {
          return post.contentValue?.series === series
        }
      })
    }

    l.sort((a, b) => {
      if (a.contentValue?.createdTime && b.contentValue?.createdTime) {
        return a.contentValue?.createdTime > b.contentValue?.createdTime ? -1 : 1
      } else {
        return 0
      }
    })

    console.log(l)
    setList(l)
  }, [])

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
