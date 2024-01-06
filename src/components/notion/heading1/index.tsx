import * as React from 'react';
import './index.scss';
import { TextBlock } from '@types';
import { NParagraph } from '@components/notion';

interface NHeading1Props {
  head1?: TextBlock;
}

export default function NHeading1({ head1 }: NHeading1Props) {
  return (
    <>
      {head1 && (
        <h1>
          <NParagraph paragraph={head1} />
        </h1>
      )}
    </>
  );
}
