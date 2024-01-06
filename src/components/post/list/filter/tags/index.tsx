import TagItem from '@components/post/tags/item';
import React, { useContext } from 'react';
import './index.scss';
import { NotionContext } from '@store/rootStore';

export default function TagsFilter() {
  const { everyPostsTags } = useContext(NotionContext);
  return (
    <>
      {everyPostsTags && everyPostsTags?.length > 0 && (
        <div className="tag filter">
          <p className="title">태그</p>
          {everyPostsTags.map(name => (
            <TagItem key={name} name={name} useLink />
          ))}
        </div>
      )}
    </>
  );
}
