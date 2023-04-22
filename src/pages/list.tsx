import * as React from 'react'
import { useEffect, useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../scss/global.scss'
import '../scss/page.scss'
import { useGetNotionQuery } from '../services/use-notion'
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
import { SERIES_FILTERS } from '../constants'
import { CATEGORY_FILTERS } from '../constants'

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
  }
  const parseList: NotionNode[] = nodes.map(node => {
    const content = nodeToJson(node)
    const contentValue = parseContentValue(content)
    node.contentValue = contentValue
    return node
  })
  const [list, setList] = useState<NotionNode[]>([])
  const [count, setCount] = useState(0)
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    let l: NotionNode[] = []
    if (props.location.search) {
      const { series, category } = parseLocationQuery(props.location.search)

      l = parseList.filter(post => {
        if (!post.title.startsWith('/post')) return false

        if (series) {
          if (post.title.startsWith(`/post/${series}`)) {
            setFilterText(SERIES_FILTERS.find(f => f.key === series)?.name || '')
            return true
          }
        }

        if (category) {
          if (post.title.includes(`-${category}-`)) {
            setFilterText(CATEGORY_FILTERS.find(f => f.key === category)?.name || '')
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

    setCount(l.length)
    setList(l)
  }, [props.location])

  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout className="list-layout">
          <ListFilter />
          <div className="count-box">
            {filterText && (
              <strong>
                {filterText}
                <span> | </span>
              </strong>
            )}
            총 <span>{count}</span>개의 검색결과
          </div>
          <Divider color="primary" height={2} />
          <PostList list={list} />
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
