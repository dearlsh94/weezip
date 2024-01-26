import * as React from 'react';

import './NHeading2.scss';
import { NParagraph } from '@components/notion';

import { TextBlock } from '@types';

interface NHeading2Props {
  head2?: TextBlock;
}

export default function NHeading2({ head2 }: NHeading2Props) {
  return (
    <h2>
      <NParagraph paragraph={head2} />
    </h2>
  );
}
