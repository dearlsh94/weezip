import { Series } from '@components/post';
import React, { useContext } from 'react';
import './SeriesFilter.scss';
import { NotionContext } from '@store/rootStore';

export default function SeriesFilter() {
  const { everyPostsSeries } = useContext(NotionContext);
  return (
    <>
      {everyPostsSeries && everyPostsSeries?.length > 0 && (
        <div className="filter">
          <p className="title">시리즈</p>
          {everyPostsSeries.map(series => (
            <Series key={series.id} series={series} useLink />
          ))}
        </div>
      )}
    </>
  );
}
