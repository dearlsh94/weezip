import * as React from 'react';

import './NHeading1.scss';
import { NParagraph } from '@components/notion';

import { TextBlock } from '@types';

interface NHeading1Props {
  head1?: TextBlock;
}

export default function NHeading1({ head1 }: NHeading1Props) {
  return (
    <h1>
      <NParagraph paragraph={head1} />
    </h1>
  );
}
