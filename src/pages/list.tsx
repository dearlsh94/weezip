import * as React from 'react'
import { useEffect, useState } from 'react'
import { HeadFC, PageProps, navigate } from 'gatsby'
import '../scss/global.scss'
import '../scss/page.scss'
import { useGetNotionQuery } from '../services/use-notion'
import MainLayout from '../layout/MainLayout'
import { NotionContext, PageContext } from '../store/rootStore'
import { INotionContext, NotionNode } from '../types'
import { parseLocationQuery } from '../utils/parseUtils'
import PostList from '../module/PostList'
import { nodeToJson, classifyTags } from '../utils/notionUtils'
import { parseContentValue } from '../utils/parseUtils'
import SEO from '../components/header/SEO'
import ListFilter from '../components/ListFilter'
import Divider from '../components/notion/Divider'
import { SERIES_FILTERS } from '../constants'
import { CATEGORY_FILTERS } from '../constants'
import IconClearAll from '../components/icon/IconClearAll'

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
    tags: classifyTags(nodes),
  }
  const parseList: NotionNode[] = nodes
    .map(node => {
      const content = nodeToJson(node)
      const contentValue = parseContentValue(content)
      node.contentValue = contentValue
      return node
    })
    .filter(n => n.title.startsWith('/post'))

  const [list, setList] = useState<NotionNode[]>([])
  const [count, setCount] = useState(0)
  const [filterText, setFilterText] = useState('전체')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let l: NotionNode[] = []
    if (props.location.search) {
      const { series, category, tag } = parseLocationQuery(props.location.search)

      l = parseList.filter(post => {
        if (!post.title.startsWith('/post')) return false

        if (series) {
          setFilterText(SERIES_FILTERS.find(f => f.key === series)?.name || '')
          return post.title.startsWith(`/post/${series}`)
        }

        if (category) {
          setFilterText(CATEGORY_FILTERS.find(f => f.key === category)?.name || '')
          return post.title.includes(`-${category}-`)
        }

        if (tag) {
          setFilterText(`${tag} 태그`)
          return post?.contentValue?.tag?.find(t => t.name === tag)
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

    loading()
    setCount(l.length)
    setList(l)
  }, [props.location])

  const handleReset = () => {
    loading()
    setFilterText('전체')
    navigate('/list')
  }

  const loading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout className="list-layout">
          <ListFilter />
          <div className={`info-box ${isLoading ? 'loading' : ''}`}>
            {filterText && <IconClearAll size={16} handleClick={handleReset} />}
            <div className="count-box ellipsis">
              {filterText && (
                <strong>
                  {filterText}
                  <span> | </span>
                </strong>
              )}
              총 <span>{count}</span>건{filterText !== '전체' && '의 검색결과'}
            </div>
          </div>
          <Divider color="primary" height={2} />
          <PostList list={list} />
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
