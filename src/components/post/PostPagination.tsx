import * as React from 'react';
import '@scss/components/Pagination.scss';
import MyButton, { ButtonSize, ButtonColor, ButtonType } from '@components/ui/button';
import { IconArrow, IconMoveEnd } from '@components/icon';
import { paginationController } from '@src/hooks/usePagination';

interface PostPaginationProps {
  pagination: paginationController;
}

const PostPagination = ({ pagination }: PostPaginationProps) => {
  const { lastPage, currentPage } = pagination;

  return (
    <div className="post-list-page-box">
      <div className="left-box">
        {lastPage > 2 && (
          <MyButton
            className={`page-button first ${currentPage === 1 ? 'disabled' : 'active'}`}
            size={ButtonSize.THIRD}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={45}
            handleClick={pagination.first}
          >
            <IconMoveEnd direction="left" size={18} color="base" />
          </MyButton>
        )}
        <MyButton
          className={`page-button prev ${currentPage === 1 ? 'disabled' : 'active'}`}
          size={ButtonSize.THIRD}
          color={ButtonColor.PRIMARY}
          type={ButtonType.BORDER}
          width={45}
          handleClick={pagination.prev}
        >
          <IconArrow direction="left" size={12} color="base" />
        </MyButton>
      </div>
      <div className="center-box">
        {currentPage !== 1 && (
          <span className="prev" onClick={pagination.prev}>
            {Math.max(currentPage - 1, 1)}
          </span>
        )}
        <span className="current">{currentPage}</span>
        {currentPage !== lastPage && (
          <span className="next" onClick={pagination.next}>
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
          handleClick={pagination.next}
        >
          <IconArrow direction="right" size={12} color="base" />
        </MyButton>
        {lastPage > 2 && (
          <MyButton
            className={`page-button last ${currentPage === lastPage ? 'disabled' : 'active'}`}
            size={ButtonSize.THIRD}
            color={ButtonColor.PRIMARY}
            type={ButtonType.BORDER}
            width={45}
            handleClick={pagination.last}
          >
            <IconMoveEnd direction="right" size={18} color="base" />
          </MyButton>
        )}
      </div>
    </div>
  );
};

export default PostPagination;
