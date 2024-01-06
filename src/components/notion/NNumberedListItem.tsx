import * as React from 'react';
import '@scss/notion.scss';
import { NParagraph } from '@components/notion';
import { Children } from '@types';
import ContentWrapper from '@components/post/contents';

interface NNumberedListItemProps {
  numberedListItem: Children;
}

export default function NNumberedListItem({ numberedListItem }: NNumberedListItemProps) {
  const { has_children, children } = numberedListItem;
  return (
    <>
      <NParagraph paragraph={numberedListItem.numbered_list_item} />
      {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
    </>
  );
}
