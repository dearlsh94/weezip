import * as React from 'react';
import './index.scss';
import SeriesFilter from './series';
import TagsFilter from './tags';

export default function PostsFilter() {
  return (
    <div className="post-filter">
      <SeriesFilter />
      <TagsFilter />
    </div>
  );
}
