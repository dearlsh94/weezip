import * as React from 'react'
import { useEffect, useState } from 'react'
import { HeadFC, PageProps, navigate } from 'gatsby'
import '@scss/global.scss'
import '@scss/page.scss'
import { getNotionNodeByUrl } from '@services/use-notion'
import { notionNodeToJson } from '@utils/notionUtils'
import MainLayout from '@layout/MainLayout'
import SEO from '@components/header/SEO'
import ContentWrapper from '@module/ContentWrapper'
import TagBadges from '@components/TagBadges'
import { graphql } from 'gatsby'
import MyButton, { ButtonSize, ButtonColor, ButtonType } from '@components/ui/MyButton'
import { Select } from '@types'
import FloatBox from '@components/ui/FloatBox'
import PostIndex from '@module/PostIndex'
import { IconCopyLink, CircleIconWrapper } from '@components/icon'
import Linker from '@components/ui/Linker'
import { GlobalPortal } from '@components/GlobalPortal'
import useClipboard from '@src/hooks/useClipboard'

export const Head: HeadFC = ({ data, pageContext }: any) => {
  const content = notionNodeToJson(getNotionNodeByUrl(data, pageContext.slug))
  const title = content?.properties?.remark.rich_text || ''
  const tagNames = content?.properties.tag?.multi_select?.map(t => t.name)

  return (
    <SEO
      title={title}
      description={content?.properties?.series?.select?.name}
      pathname={pageContext.slug}
      keywords={tagNames}
    />
  )
}

const PostPage: React.FC<PageProps> = ({ data, pageContext }: any) => {
  const { slug } = pageContext
  const { copyToClipboard } = useClipboard()
  const content = notionNodeToJson(getNotionNodeByUrl(data, slug))
  const title = content?.properties?.remark.rich_text || ''
  const [indexList, setIndexList] = useState<HTMLHeadingElement[]>([])
  const [series, setSeries] = useState<Select>()
  const tagNames = content?.properties.tag?.multi_select?.map(t => t.name)

  useEffect(() => {
    if (!slug) {
      navigate('/list')
    }

    const elHeaders = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = []
      elHeaders.forEach(el => {
        if (!el.className.includes('title')) headers.push(el)
      })
      setIndexList(headers)
    }

    setSeries(content?.properties?.series?.select)
  }, [])

  const handleCopy = () => {
    if (copyToClipboard(window.location.href)) {
      alert('현재 게시글 주소가 복사되었습니다.')
    } else {
      alert('주소를 복사하는 중 오류가 발생했습니다.')
    }
  }

  return (
    <GlobalPortal.Provider>
      <MainLayout className="post-layout">
        <article className="post">
          <div className="title-box">
            {series && (
              <Linker url={`/list?series=${series.name}`}>
                <span className={`series-title`}>시리즈 [{content?.properties?.series?.select?.name}]</span>
              </Linker>
            )}
            <h1 className="title">{title}</h1>
            <div className="desc-box">
              <div className="left-box">{tagNames && <TagBadges tagNames={tagNames} />}</div>
              <div className="right-box">
                <div className="copy-box" onClick={handleCopy} onKeyDown={handleCopy}>
                  <IconCopyLink size={18} color="secondary" />
                </div>
                <div className="date-box">
                  {content?.properties?.created_date?.date?.start && (
                    <span className="date">작성 : {content?.properties?.created_date?.date?.start}</span>
                  )}
                  {content?.properties?.edited_date?.date?.start && (
                    <span className="date">수정 : {content?.properties?.edited_date?.date?.start}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <PostIndex list={indexList} />
          {content && <ContentWrapper childrens={content.children} />}
        </article>
        <div className="bottom-box">
          <div className="share-box">
            <div className="copy" onClick={handleCopy}>
              <CircleIconWrapper color={'secondary'}>
                <IconCopyLink />
              </CircleIconWrapper>
            </div>
          </div>
          <div className="button-box">
            {content?.public_url && (
              <Linker url={content.public_url} target="_blank">
                <MyButton size={ButtonSize.PRIMARY} color={ButtonColor.PRIMARY} type={ButtonType.BORDER} width={'100%'}>
                  노션으로 댓글달기
                </MyButton>
              </Linker>
            )}
            {series && (
              <Linker url={`/list?series=${series.name}`}>
                <MyButton
                  className="series-button"
                  size={ButtonSize.PRIMARY}
                  color={ButtonColor.PRIMARY}
                  type={ButtonType.BORDER}
                  width={'100%'}
                >
                  <span>{series.name}</span>
                  시리즈 전체보기
                </MyButton>
              </Linker>
            )}
            <Linker url={`/list`}>
              <MyButton size={ButtonSize.PRIMARY} color={ButtonColor.PRIMARY} type={ButtonType.BORDER} width={'100%'}>
                포스트 전체보기
              </MyButton>
            </Linker>
          </div>
          <div className="feedback-box">
            <p>피드백은 언제나 환영이에요! 연락 방법은 페이지 제일 하단을 확인해주세요.</p>
            <p>👇👇 Contact Me (메일 또는 DM)👇👇</p>
          </div>
        </div>
        <FloatBox useTop={true} />
      </MainLayout>
    </GlobalPortal.Provider>
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
