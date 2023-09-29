import * as React from 'react';
import '@scss/notion.scss';
import { TextBlock } from '@types';
import { NParagraph } from '@components/notion';

interface NHeading3Props {
  head3?: TextBlock;
}

export default function NHeading3({ head3 }: NHeading3Props) {
  return (
    <>
      {head3 && (
        <h3>
          <NParagraph paragraph={head3} />
        </h3>
      )}
    </>
  );
}
