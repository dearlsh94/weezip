import * as React from 'react';
import './PostsFilter.scss';
import { SeriesFilter } from './Series';
import { TagsFilter } from './Tags';

export default function PostsFilter() {
  return (
    <div className="post-filter">
      <SeriesFilter />
      <TagsFilter />
    </div>
  );
}
