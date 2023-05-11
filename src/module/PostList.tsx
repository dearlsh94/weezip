import * as React from 'react'
import Linker from '@components/Linker'
import PostListItem from '@components/PostListItem'
import '@scss/module/PostList.scss'
import { NotionNode } from '@types'
import IconArrow from '@components/icon/IconArrow'
import IconClearAll from '@components/icon/IconClearAll'
import { navigate } from 'gatsby'
import { parseLocationQuery } from '@utils/parseUtils'
import MyButton, { ButtonSize, ButtonColor, ButtonType } from '@components/ui/MyButton'

interface Props {
  list: NotionNode[]
  currentPage: number
  lastPage: number
}

const PostList = ({ list, currentPage, lastPage }: Props) => {
  const FIRST_PAGE = 1

  const handleOlder = () => {
    if (currentPage !== FIRST_PAGE) {
      handleMove(Math.max(currentPage - 1, FIRST_PAGE))
    }
  }
  const handleNewer = () => {
    if (currentPage !== lastPage) {
      handleMove(Math.min(currentPage + 1, lastPage))
    }
  }

  const handleMove = (page: number) => {
    const { series, category, tag } = parseLocationQuery(location.search)
    let url = '/list'
    let params = []
    if (series) params.push(`series=${series}`)
    if (category) params.push(`category=${category}`)
    if (tag) params.push(`tag=${tag}`)
    params.push(`page=${page}`)
    url += `?${params.join('&')}`
    navigate(url)
  }

  const handleReset = () => {
    navigate('/list')
  }

  return (
    <React.Fragment>
      {list.length === 0 && (
        <div className="post-list-empty-box">
          <p>검색 결과가 없습니다.</p>
          <p>전체 글들을 둘러보는 건 어떠세요 ?</p>
          <span onClick={handleReset}>
            <IconClearAll size={16} />
            전체글 보러가기
          </span>
        </div>
      )}
      {list?.length > 0 && (
        <ul className={`post-list-box`}>
          {list.map((post, i) => {
            return (
              <li key={`post-list-${i}`}>
                <Linker url={post.title}>
                  <PostListItem post={post} />
                </Linker>
              </li>
            )
          })}
        </ul>
      )}
      {list?.length > 0 && (
        <div className="post-list-page-box">
          <MyButton
            className={`page-button prev ${currentPage === FIRST_PAGE ? 'disabled' : 'active'}`}
            size={ButtonSize.PRIMARY}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={120}
            handleClick={handleOlder}
          >
            <IconArrow direction="left" size={16} />
            Older
          </MyButton>
          <MyButton
            className={`page-button next ${currentPage === lastPage ? 'disabled' : 'active'}`}
            size={ButtonSize.PRIMARY}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={120}
            handleClick={handleNewer}
          >
            Newer
            <IconArrow direction="right" size={16} />
          </MyButton>
        </div>
      )}
    </React.Fragment>
  )
}

export default PostList
