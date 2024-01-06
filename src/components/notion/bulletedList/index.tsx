import * as React from 'react';
import './index.scss';
import { NParagraph } from '@components/notion';
import { Children } from '@types';
import ContentWrapper from '@components/post/contents';

interface NBulletedListProps {
  bulletedListItem: Children;
}

export default function NBulletedList({ bulletedListItem }: NBulletedListProps) {
  const { has_children, children } = bulletedListItem;

  return (
    <>
      <NParagraph paragraph={bulletedListItem.bulleted_list_item} />
      {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
    </>
  );
}
