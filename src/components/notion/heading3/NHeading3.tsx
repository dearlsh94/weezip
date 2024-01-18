import * as React from 'react';
import './NHeading3.scss';
import { TextBlock } from '@types';
import { NParagraph } from '@components/notion';

interface NHeading3Props {
  head3?: TextBlock;
}

export default function NHeading3({ head3 }: NHeading3Props) {
  return (
    <h3>
      <NParagraph paragraph={head3} />
    </h3>
  );
}
