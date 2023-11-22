import { navigate } from 'gatsby';

interface PaginationProps {
  perPage: number;
  totalCount: number;
}

export interface paginationController {
  currentPage: number;
  lastPage: number;
  indexOfLastItem: number;
  indexOfFirstItem: number;
  first: () => void;
  prev: () => void;
  next: () => void;
  last: () => void;
}

const usePagination = ({ perPage, totalCount }: PaginationProps): paginationController => {
  const search = new URLSearchParams(location.search);
  const currentPage = search.has('page') && Number(search.get('page')) ? Number(search.get('page')) : 1;
  const lastPage = Math.ceil(totalCount / perPage);
  const handleFirst = () => {
    if (currentPage !== 1) {
      search.set('page', '1');
      navigate(`${location.pathname}?${search.toString()}`);
    }
  };
  const handlePrev = () => {
    const prev = Math.max(currentPage - 1, 1);
    if (currentPage !== prev) {
      search.set('page', prev.toString());
      navigate(`${location.pathname}?${search.toString()}`);
    }
  };
  const handleNext = () => {
    const next = Math.min(currentPage + 1, lastPage);
    if (currentPage !== next) {
      search.set('page', next.toString());
      navigate(`${location.pathname}?${search.toString()}`);
    }
  };
  const handleLast = () => {
    if (currentPage !== lastPage) {
      search.set('page', lastPage.toString());
      navigate(`${location.pathname}?${search.toString()}`);
    }
  };

  return {
    currentPage,
    lastPage,
    indexOfLastItem: currentPage * perPage,
    indexOfFirstItem: currentPage * perPage - perPage,
    first: handleFirst,
    prev: handlePrev,
    next: handleNext,
    last: handleLast,
  };
};

export default usePagination;
