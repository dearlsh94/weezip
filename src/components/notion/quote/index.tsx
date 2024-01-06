import * as React from 'react';
import './index.scss';
import { Children, TextBlock } from '@types';
import { NParagraph } from '@components/notion';
import ContentWrapper from '@components/post/contents';

interface NQuoteProps {
  quote?: TextBlock;
  children: Children[];
}

export default function NQuote({ quote, children }: NQuoteProps) {
  return (
    <>
      {quote && (
        <blockquote className={`block-quote`}>
          <NParagraph paragraph={quote} />
          {children && children?.length > 0 && <ContentWrapper childrens={children} />}
        </blockquote>
      )}
    </>
  );
}
