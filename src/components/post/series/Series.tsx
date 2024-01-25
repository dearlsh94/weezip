import * as React from 'react';

import './Series.scss';
import { Linker } from '@components/ui';

import { Select } from '@types';

interface SeriesProps {
  series: Select;
  useLink?: boolean;
}

export default function Series({ series, useLink = false, ...rest }: SeriesProps) {
  return React.createElement(
    useLink ? Linker : 'span',
    {
      url: `/list?series=${encodeURIComponent(series?.name)}`,
      label: `${series?.name} 시리즈 목록으로 이동`,
      ...rest,
    },
    <span className={`series-box ${useLink ? 'link' : 'normal'}`}>[{series?.name}]</span>
  );
}
