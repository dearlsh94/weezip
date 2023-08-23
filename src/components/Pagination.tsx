import * as React from 'react'
import '@scss/components/Pagination.scss'
import MyButton, { ButtonSize, ButtonColor, ButtonType } from '@components/ui/MyButton'
import { IconArrow, IconMoveEnd } from '@components/icon'
import { navigate } from 'gatsby'

interface IProps {
  lastPage: number
  currentPage: number
}

const Pagination = ({ lastPage, currentPage }: IProps) => {
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
  const handleFirst = () => {
    if (currentPage !== FIRST_PAGE) {
      handleMove(FIRST_PAGE)
    }
  }
  const handleLast = () => {
    if (currentPage !== lastPage) {
      handleMove(lastPage)
    }
  }

  const handleMove = (page: number) => {
    const search = new URLSearchParams(location.search)
    if (search.has('page')) {
      search.delete('page')
    }
    search.append('page', page.toString())
    navigate(`${location.pathname}?${search.toString()}`)
  }

  return (
    <div className="post-list-page-box">
      <div className="left-box">
        {lastPage > 2 && (
          <MyButton
            className={`page-button first ${currentPage === FIRST_PAGE ? 'disabled' : 'active'}`}
            size={ButtonSize.THIRD}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={45}
            handleClick={handleFirst}
          >
            <IconMoveEnd direction="left" size={18} color="primary" />
          </MyButton>
        )}
        <MyButton
          className={`page-button prev ${currentPage === FIRST_PAGE ? 'disabled' : 'active'}`}
          size={ButtonSize.THIRD}
          color={ButtonColor.PRIMARY}
          type={ButtonType.BORDER}
          width={45}
          handleClick={handleOlder}
        >
          <IconArrow direction="left" size={12} color="primary" />
        </MyButton>
      </div>
      <div className="center-box">
        {currentPage !== 1 && (
          <span className="prev" onClick={handleOlder}>
            {Math.max(currentPage - 1, 1)}
          </span>
        )}
        <span className="current">{currentPage}</span>
        {currentPage !== lastPage && (
          <span className="next" onClick={handleNewer}>
            {Math.min(currentPage + 1, lastPage)}
          </span>
        )}
      </div>
      <div className="right-box">
        <MyButton
          className={`page-button next ${currentPage === lastPage ? 'disabled' : 'active'}`}
          size={ButtonSize.THIRD}
          color={ButtonColor.PRIMARY}
          type={ButtonType.BORDER}
          width={45}
          handleClick={handleNewer}
        >
          <IconArrow direction="right" size={12} color="primary" />
        </MyButton>
        {lastPage > 2 && (
          <MyButton
            className={`page-button last ${currentPage === lastPage ? 'disabled' : 'active'}`}
            size={ButtonSize.THIRD}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={45}
            handleClick={handleLast}
          >
            <IconMoveEnd direction="right" size={18} color="primary" />
          </MyButton>
        )}
      </div>
    </div>
  )
}

export default Pagination
