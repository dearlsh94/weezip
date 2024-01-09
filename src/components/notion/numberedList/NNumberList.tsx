import * as React from 'react';
import './NNumberList.scss';
import { NParagraph } from '@components/notion';
import { NumberedListItemChildren } from '@types';
import { Contents } from '@components/post';

interface NNumberedListProps {
  numberedListItem: NumberedListItemChildren;
}

export default function NNumberedList({ numberedListItem }: NNumberedListProps) {
  const { has_children, children } = numberedListItem;
  return (
    <>
      <NParagraph paragraph={numberedListItem.numbered_list_item} />
      {has_children && children?.length > 0 && <Contents childrens={children} />}
    </>
  );
}
