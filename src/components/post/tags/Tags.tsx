import * as React from 'react';

import './Tags.scss';
import { TagItem } from './item';

import { MultiSelect } from '@types';

interface TagsProps {
  tag: MultiSelect;
  useLink?: boolean;
}

export default function Tags({ tag, useLink = false }: TagsProps) {
  return (
    tag?.length && (
      <div className="tags-box">
        {tag?.map(tag => <TagItem key={`tag-item-${tag.name}`} name={tag.name} useLink={useLink} />)}
      </div>
    )
  );
}
