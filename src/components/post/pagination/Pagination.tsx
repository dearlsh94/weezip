import * as React from 'react';
import './Pagination.scss';
import { MyButton } from '@components/ui';
import { ButtonColor, ButtonSize, ButtonType } from '@components/ui/Button/MyButton';
import { paginationController } from '@src/hooks/usePagination';
import { IconEndArrow, IconSingleArrow } from '@components/icon';

interface PaginationProps {
  pagination: paginationController;
}

export default function Pagination({ pagination }: PaginationProps) {
  const { lastPage, currentPage } = pagination;

  return (
    <div className="posts-pagination">
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
            <IconEndArrow direction="left" size={18} color="base" />
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
          <IconSingleArrow direction="left" size={12} color="base" />
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
          <IconSingleArrow direction="right" size={12} color="base" />
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
            <IconEndArrow direction="right" size={18} color="base" />
          </MyButton>
        )}
      </div>
    </div>
  );
}
