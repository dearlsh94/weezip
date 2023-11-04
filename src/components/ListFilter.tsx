import * as React from 'react';
import { useContext } from 'react';
import '@scss/components/ListFilter.scss';
import Divider from '@components/ui/Divider';
import { NotionContext } from '@store/rootStore';
import TagBadges from './TagBadges';
import SeriesBadges from './SeriesBadges';

const ListFilter = () => {
  const { postTags, postSeries } = useContext(NotionContext);

  return (
    <div className="list-filter-container">
      {postSeries && postSeries?.length > 0 && (
        <>
          <div className="series filter">
            <p className="title">시리즈</p>
            <SeriesBadges series={postSeries} />
          </div>
        </>
      )}
      {postTags && postTags?.length > 0 && (
        <>
          <Divider />
          <div className="tag filter">
            <p className="title">태그</p>
            <TagBadges tagNames={postTags} />
          </div>
        </>
      )}
    </div>
  );
};

export default ListFilter;
