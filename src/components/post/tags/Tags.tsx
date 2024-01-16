import * as React from 'react';
import './Tags.scss';
import { MultiSelect } from '@types';
import { TagItem } from './item';

interface TagsProps {
  tag: MultiSelect;
  useLink?: boolean;
}

export default function Tags({ tag, useLink = false }: TagsProps) {
  return (
    tag?.length > 0 && (
      <div className="tags-box">
        {tag?.map(tag => <TagItem key={`tag-item-${tag.name}`} name={tag.name} useLink={useLink} />)}
      </div>
    )
  );
}
