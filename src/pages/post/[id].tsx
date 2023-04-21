import * as React from 'react'
import { useEffect, useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../../scss/page.scss'
import { useGetNotionQuery } from '../../services/use-notion'
import { classifyCategory, findContentNode } from '../../utils/notionUtils'
import MainLayout from '../../layout/MainLayout'
import { NotionContext, PageContext } from '../../store/rootStore'
import { INotionContext } from '../../types'
import SEO from '../../components/header/SEO'
import { Children } from '../../types'
import ContentWrapper from '../../module/ContentWrapper'
import HeaderIndexList from '../../components/HeaderIndexList'
import TagBadges from '../../components/TagBadges'
import { graphql } from 'gatsby'
import { parseNotion } from '../../services/use-notion'

export const Head: HeadFC = ({ params, data }: any) => {
  const nodes = parseNotion(data)
  const content: Children | null = findContentNode(nodes, `/post/${params?.id}`)
  const title = content?.properties?.remark.rich_text || ''
  const description = content?.properties?.series.rich_text || ''
  return (
    <>
      <SEO title={title} description={description}>
        {/* <link rel="canonical" href={`https://weezip.freefeely.com/post`} /> */}
      </SEO>
    </>
  )
}

const ListPage: React.FC<PageProps> = (props: PageProps) => {
  const nodes = useGetNotionQuery()
  const store: INotionContext = {
    nodes: nodes,
    categories: classifyCategory(nodes),
  }
  const { id } = props?.params
  const content: Children | null = findContentNode(nodes, `/post/${id}`)
  const title = content?.properties?.remark.rich_text || ''
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

  return (
    <PageContext.Provider value={props}>
      <NotionContext.Provider value={store}>
        <MainLayout>
          <div>
            <TagBadges tag={content?.properties.tag} />
          </div>
          <div className="title-box">
            {content?.properties?.series.rich_text && (
              <span className={`series-title`}>[{content?.properties?.series.rich_text}]</span>
            )}
            <p className="title">{title}</p>
            <div className="desc-box">
              <span className="date">작성일 : {content?.properties?.created_date?.date.start}</span>
              <span className="date">수정일 : {content?.properties?.edited_date?.date.start}</span>
            </div>
          </div>
          <div className="index-box">
            <p>목차</p>
            {indexList && indexList?.length > 0 && <HeaderIndexList list={indexList} />}
          </div>
          {content && <ContentWrapper childrens={content.children} />}
        </MainLayout>
      </NotionContext.Provider>
    </PageContext.Provider>
  )
}

export const query = graphql`
  query {
    allNotion {
      edges {
        node {
          archived
          children {
            id
          }
          createdAt
          id
          internal {
            content
          }
          json
          markdownString
          parent {
            id
            internal {
              content
            }
          }
          raw {
            archived
            children {
              id
            }
            created_by {
              id
            }
            created_time
            id
            last_edited_by {
              id
            }
            last_edited_time
            object
            parent {
              database_id
              type
            }
            url
          }
          title
          updatedAt
        }
      }
    }
  }
`

export default ListPage
