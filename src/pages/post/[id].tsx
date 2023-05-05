import * as React from 'react'
import { useEffect, useState } from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '@scss/page.scss'
import { getNotionNodeAll, getNotionNodeByUrl } from '@services/use-notion'
import { getNodeJsonByUrl, notionNodeToJson } from '@utils/notionUtils'
import MainLayout from '@layout/MainLayout'
import { NotionContext } from '@store/rootStore'
import { INotionContext } from '@types'
import SEO from '@components/header/SEO'
import ContentWrapper from '@module/ContentWrapper'
import HeaderIndexList from '@components/HeaderIndexList'
import TagBadges from '@components/TagBadges'
import { graphql } from 'gatsby'

export const Head: HeadFC = ({ data, params }) => {
  const content = notionNodeToJson(getNotionNodeByUrl(data, `/post/${params?.id}`))
  const title = content?.properties?.remark.rich_text || ''
  return <SEO title={title} description={content?.properties?.series.rich_text}></SEO>
}

const ListPage: React.FC<PageProps> = ({ data, params }) => {
  const content = notionNodeToJson(getNotionNodeByUrl(data, `/post/${params?.id}`))
  const title = content?.properties?.remark.rich_text || ''
  const [indexList, setIndexList] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const elHeaders = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = []
      elHeaders.forEach(el => {
        if (!el.className.includes('title')) headers.push(el)
      })
      setIndexList(headers)
    }
  }, [])

  return (
    <MainLayout className="post-layout">
      <div>
        <TagBadges tag={content?.properties.tag} />
      </div>
      <div className="title-box">
        {content?.properties?.series.rich_text && (
          <span className={`series-title`}>[{content?.properties?.series.rich_text}]</span>
        )}
        <h1 className="title">{title}</h1>
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
  )
}

export const postQuery = graphql`
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
