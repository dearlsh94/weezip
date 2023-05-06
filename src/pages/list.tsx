import * as React from 'react'
import { useEffect, useState } from 'react'
import { HeadFC, PageProps, navigate } from 'gatsby'
import '@scss/global.scss'
import '@scss/page.scss'
import { useGetNotionQuery } from '@services/use-notion'
import MainLayout from '@layout/MainLayout'
import { NotionContext, PageContext } from '@store/rootStore'
import { INotionContext, NotionNode } from '@types'
import { parseLocationQuery } from '@utils/parseUtils'
import PostList from '@module/PostList'
import { notionNodeToJson, classifyTags } from '@utils/notionUtils'
import { parseContentValue } from '@utils/parseUtils'
import SEO from '@components/header/SEO'
import ListFilter from '@components/ListFilter'
import Divider from '@components/notion/Divider'
import { SERIES_FILTERS } from '@src/constants'
import { CATEGORY_FILTERS } from '@src/constants'
import IconClearAll from '@components/icon/IconClearAll'
import CircleProgress from '@components/ui/CircleProgress'

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
      const content = notionNodeToJson(node)
      const contentValue = parseContentValue(content)
      node.contentValue = contentValue
      return node
    })
    .filter(n => n.title.startsWith('/post'))
  const PER_PAGE = 10

  const [list, setList] = useState<NotionNode[]>([])
  const [count, setCount] = useState(0)
  const [filterText, setFilterText] = useState('전체')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    let l: NotionNode[] = []
    let p = 1
    let lp = 1
    if (props.location.search) {
      const { series, category, tag, page } = parseLocationQuery(props.location.search)

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

        return true
      })

      lp = Math.ceil(l.length / PER_PAGE)
      if (page) {
        p = Math.min(page, lp)
      }
    } else {
      l = parseList
      lp = Math.ceil(l.length / PER_PAGE)
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
    setCurrentPage(p)
    setLastPage(lp)

    const indexOfLastPost = p * PER_PAGE
    const indexOfFirstPost = indexOfLastPost - PER_PAGE
    setList(l.slice(indexOfFirstPost, indexOfLastPost))
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
    }, 500)
  }

  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout className="list-layout">
          <ListFilter />
          <div className={`info-box ${isLoading ? 'loading' : ''}`}>
            <IconClearAll size={24} handleClick={handleReset} />
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
          {isLoading ? (
            <CircleProgress height={180} />
          ) : (
            <PostList list={list} currentPage={currentPage} lastPage={lastPage} />
          )}
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
