import SeriesBadges from '@components/post/SeriesBadges';
import React, { useContext } from 'react';
import './index.scss';
import { NotionContext } from '@store/rootStore';

export default function SeriesFilter() {
  const { everyPostsSeries } = useContext(NotionContext);
  return (
    <>
      {everyPostsSeries && everyPostsSeries?.length > 0 && (
        <>
          <div className="series filter">
            <p className="title">시리즈</p>
            <SeriesBadges series={everyPostsSeries} />
          </div>
        </>
      )}
    </>
  );
}
