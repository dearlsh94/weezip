import React from 'react';

import { TagItem } from '@components/post';
import './TagsFilter.scss';
import { useWeezipNotion } from '@hooks/useWeezipNotion';

export default function TagsFilter() {
  const { everyPostsTags } = useWeezipNotion();
  return (
    !!everyPostsTags?.length && (
      <div className="tag-filter">
        <p className="title">태그</p>
        <div className="tag-filter__items">
          {everyPostsTags.map(name => (
            <TagItem key={name} name={name} useLink />
          ))}
        </div>
      </div>
    )
  );
}
