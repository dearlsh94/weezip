import React, { useContext } from 'react';
import './TagsFilter.scss';
import { TagItem } from '@components/post';
import { NotionContext } from '@store/index';

export default function TagsFilter() {
  const { everyPostsTags } = useContext(NotionContext);
  return (
    everyPostsTags &&
    everyPostsTags?.length > 0 && (
      <div className="tag filter">
        <p className="title">태그</p>
        {everyPostsTags.map(name => (
          <TagItem key={name} name={name} useLink={true} />
        ))}
      </div>
    )
  );
}
