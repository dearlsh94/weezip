import * as React from 'react';
import './index.scss';
import { MultiSelectProperty } from '@types';
import TagItem from './item';

interface TagsProps {
  tag: MultiSelectProperty;
}

const Tags = ({ tag }: TagsProps) => {
  return (
    <>
      {tag?.multi_select?.length > 0 && (
        <div className="tags-box">{tag?.multi_select?.map(tag => <TagItem name={tag.name} useLink />)}</div>
      )}
    </>
  );
};

export default Tags;
