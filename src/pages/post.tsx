import * as React from 'react'
import { useEffect, useState } from 'react'
import { HeadFC, PageProps, navigate } from 'gatsby'
import '@scss/page.scss'
import { getNotionNodeByUrl } from '@services/use-notion'
import { notionNodeToJson } from '@utils/notionUtils'
import MainLayout from '@layout/MainLayout'
import SEO from '@components/header/SEO'
import ContentWrapper from '@module/ContentWrapper'
import TagBadges from '@components/TagBadges'
import { graphql } from 'gatsby'
import MyButton, { ButtonSize, ButtonColor, ButtonType } from '@components/ui/MyButton'
import { SERIES_FILTERS } from '@src/constants'
import { getSeriesCodeByURL } from '@utils/parseUtils'
import { Filter } from '@types'
import FloatBox from '@components/ui/FloatBox'
import HeaderIndex from '@module/HeaderIndex'
import IconCopyLink from '@components/icon/IconCopyLink'
import CircleIconWrapper from '@components/icon/CircleIconWrapper'

export const Head: HeadFC = ({ data, pageContext }: any) => {
  const content = notionNodeToJson(getNotionNodeByUrl(data, pageContext.slug))
  const title = content?.properties?.remark.rich_text || ''
  return <SEO title={title} description={content?.properties?.series.rich_text} pathname={pageContext.slug}></SEO>
}

const PostPage: React.FC<PageProps> = ({ data, pageContext }: any) => {
  const { slug } = pageContext
  const content = notionNodeToJson(getNotionNodeByUrl(data, slug))
  const title = content?.properties?.remark.rich_text || ''
  const [indexList, setIndexList] = useState<HTMLHeadingElement[]>([])
  const [series, setSeries] = useState<Filter>()

  useEffect(() => {
    if (!slug) {
      moveToList()
    }
    const elHeaders = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = []
      elHeaders.forEach(el => {
        if (!el.className.includes('title')) headers.push(el)
      })
      setIndexList(headers)
    }

    const _series = SERIES_FILTERS.find(f => f.key === getSeriesCodeByURL(slug))
    setSeries(_series)
  }, [])

  const moveToList = () => {
    navigate('/list')
  }

  const moveToSeriesList = () => {
    if (series) {
      navigate(`/list?series=${series.key}`)
    } else {
      moveToList()
    }
  }

  const handleCopy = () => {
    var url = ''
    var textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    url = window.location.href
    textarea.value = url
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('현재 게시글 주소가 복사되었습니다.')
  }

  return (
    <MainLayout className="post-layout">
      <div className="title-box">
        {content?.properties?.series.rich_text && (
          <span className={`series-title`}>시리즈 [{content?.properties?.series.rich_text}]</span>
        )}
        <h1 className="title">{title}</h1>
        <div className="desc-box">
          <div className="left-box">
            <TagBadges tag={content?.properties.tag} />
          </div>
          <div className="right-box">
            <div className="copy-box" onClick={handleCopy} onKeyDown={handleCopy}>
              <IconCopyLink size={18} fill="#a7c4bc" />
            </div>
            <div className="date-box">
              <span className="date">작성 : {content?.properties?.created_date?.date.start}</span>
              <span className="date">수정 : {content?.properties?.edited_date?.date.start}</span>
            </div>
          </div>
        </div>
      </div>
      <HeaderIndex list={indexList} />
      {content && <ContentWrapper childrens={content.children} />}
      <div className="bottom-box">
        <div className="share-box">
          <div className="copy" onClick={handleCopy}>
            <CircleIconWrapper color={'secondary'}>
              <IconCopyLink />
            </CircleIconWrapper>
          </div>
        </div>
        {series && (
          <MyButton
            className="series-button"
            size={ButtonSize.PRIMARY}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={'100%'}
            handleClick={moveToSeriesList}
          >
            <span>{series.name}</span>
            시리즈 전체보기
          </MyButton>
        )}
        <MyButton
          size={ButtonSize.PRIMARY}
          color={ButtonColor.PRIMARY}
          type={ButtonType.BORDER}
          width={'100%'}
          handleClick={moveToList}
        >
          전체 목록 보기
        </MyButton>
        <div className="feedback-box">
          <p>피드백은 언제나 환영이에요!</p>
          <p>👇👇 Contact Me 👇👇</p>
        </div>
      </div>
      <FloatBox useTop={true} />
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

export default PostPage
