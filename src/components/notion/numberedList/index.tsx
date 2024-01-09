import * as React from 'react';
import './index.scss';
import { NParagraph } from '@components/notion';
import { NumberedListItemChildren } from '@types';
import ContentWrapper from '@components/post/contents';

interface NNumberedListProps {
  numberedListItem: NumberedListItemChildren;
}

export default function NNumberedList({ numberedListItem }: NNumberedListProps) {
  const { has_children, children } = numberedListItem;
  return (
    <>
      <NParagraph paragraph={numberedListItem.numbered_list_item} />
      {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
    </>
  );
}
