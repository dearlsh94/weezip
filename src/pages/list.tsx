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
import { parseNotionColumn } from '@utils/parseUtils'
import SEO from '@components/header/SEO'
import ListFilter from '@components/ListFilter'
import Divider from '@components/ui/Divider'
import { SERIES_FILTERS } from '@src/constants'
import { CATEGORY_FILTERS } from '@src/constants'
import { IconClearAll } from '@components/icon'
import CircleProgress from '@components/ui/CircleProgress'

export const Head: HeadFC = () => {
  return (
    <SEO title={`글목록`} description={`Write, Explain, Edit, Zip`} pathname="/list/">
      <link rel="canonical" href={`https://weezip.freefeely.com/list/`} />
    </SEO>
  )
}

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    postTags: classifyTags(nodes),
  }
  const parseList: NotionNode[] = nodes
    .map(node => {
      const content = notionNodeToJson(node)
      node.notionColumn = parseNotionColumn(content)
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
    filterReset()

    let _list: NotionNode[] = []
    let _page = 1
    let _lastPage = 1

    if (props.location.search) {
      const { series, category, tag, page, keyword } = parseLocationQuery(props.location.search)

      _list = parseList.filter(post => {
        if (!post.title.startsWith('/post')) return false

        if (series) {
          const filter = SERIES_FILTERS.find(f => f.key.toUpperCase() === series.toUpperCase())
          if (!filter) return false

          setFilterText(filter?.name || '')
          return post?.notionColumn?.series?.name === filter?.name
        }

        if (category) {
          const filter = CATEGORY_FILTERS.find(f => f.name.toUpperCase() === category.toUpperCase())
          if (!filter) return false

          setFilterText(filter?.name || '')
          return post?.notionColumn?.category?.name.toUpperCase() === filter?.name.toUpperCase()
        }

        if (tag) {
          setFilterText(`${tag} 태그`)
          return post?.notionColumn?.tag?.find(t => t.name.toUpperCase() === decodeURIComponent(tag).toUpperCase())
        }

        if (keyword) {
          const searchText = decodeURIComponent(keyword).replaceAll(/ /g, '').toUpperCase()
          setFilterText(`'${searchText}' 포함된 제목`)
          return post.notionColumn?.remark?.replaceAll(/ /g, '').toUpperCase().includes(searchText)
        }

        return true
      })

      _lastPage = Math.ceil(_list.length / PER_PAGE)
      if (page) {
        _page = Math.min(page, _lastPage)
      }
    } else {
      _list = parseList
      _lastPage = Math.ceil(_list.length / PER_PAGE)
    }

    _list.sort((a, b) => {
      if (a.notionColumn?.idx && b.notionColumn?.idx) {
        return a.notionColumn?.idx > b.notionColumn?.idx ? -1 : 1
      } else {
        return 0
      }
    })

    loading()
    setCount(_list.length)
    setCurrentPage(_page)
    setLastPage(_lastPage)

    const indexOfLastPost = _page * PER_PAGE
    const indexOfFirstPost = indexOfLastPost - PER_PAGE
    setList(_list.slice(indexOfFirstPost, indexOfLastPost))
  }, [props.location])

  const filterReset = () => {
    loading()
    setFilterText('전체')
  }

  const handleClearAll = () => {
    filterReset()
    navigate('/list')
  }

  const loading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 250)
  }

  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout className="list-layout">
          <ListFilter />
          <div className={`info-box ${isLoading ? 'loading' : ''}`}>
            <IconClearAll size={24} handleClick={handleClearAll} fill={'#5e8b7e'} />
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
            <CircleProgress height={360} />
          ) : (
            <PostList list={list} currentPage={currentPage} lastPage={lastPage} />
          )}
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export default ListPage
