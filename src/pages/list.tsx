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
import ListFilter from '../components/ListFilter'
import Divider from '../components/notion/Divider'

export const Head: HeadFC = () => {
  return (
    <SEO title={`글목록`} description={`Write, Explain, Edit, Zip`}>
      <link rel="canonical" href={`https://weezip.freefeely.com/list`} />
    </SEO>
  )
}

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const parseList: NotionNode[] = nodes.map(node => {
    const content = nodeToJson(node)
    const contentValue = parseContentValue(content)
    node.contentValue = contentValue
    return node
  })
  const [list, setList] = useState<NotionNode[]>([])

  useEffect(() => {
    let l: NotionNode[] = []
    if (props.location.search) {
      const { series, category } = parseLocationQuery(props.location.search)

      l = parseList.filter(post => {
        if (!post.title.startsWith('/post')) return false

        if (series) {
          if (post.title.startsWith(`/post/${series}`)) {
            return true
          }
        }

        if (category) {
          if (post.title.includes(`-${category}-`)) {
            return true
          }
        }
      })
    } else {
      l = parseList
    }

    l.sort((a, b) => {
      if (a.contentValue?.createdTime && b.contentValue?.createdTime) {
        return a.contentValue?.createdTime > b.contentValue?.createdTime ? -1 : 1
      } else {
        return 0
      }
    })

    setList(l)
  }, [props.location])

  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout>
          <ListFilter />
          <Divider color="primary" height={2} />
          <PostList list={list} />
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
