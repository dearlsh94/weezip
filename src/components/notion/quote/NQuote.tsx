import * as React from 'react';
import './NQuote.scss';
import { NotionChildrenType, TextBlock } from '@types';
import { NParagraph } from '@components/notion';
import { Contents } from '@components/post';

interface NQuoteProps {
  quote?: TextBlock;
  children: NotionChildrenType[];
}

export default function NQuote({ quote, children }: NQuoteProps) {
  return (
    <blockquote className={`block-quote`}>
      <NParagraph paragraph={quote} />
      {children && children?.length > 0 && <Contents childrens={children} />}
    </blockquote>
  );
}
