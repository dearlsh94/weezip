import React from 'react';
import { Series } from '@components/post';
import './SeriesFilter.scss';
import { useNotion } from '@src/hooks/useNotion';

export default function SeriesFilter() {
  const { everyPostsSeries } = useNotion();
  return (
    everyPostsSeries?.length > 0 && (
      <div className="filter">
        <p className="title">시리즈</p>
        {everyPostsSeries.map(series => (
          <Series key={series.id} series={series} useLink />
        ))}
      </div>
    )
  );
}
