import * as React from 'react';

import './Series.scss';
import { Linker } from '@components/ui';
import { ARIA_LABEL } from '@src/constants';
import { paths } from '@utils/url';

import { Select } from '@types';

interface SeriesProps {
  series: Select;
  useLink?: boolean;
}

export default function Series({ series, useLink = false, ...rest }: SeriesProps) {
  return React.createElement(
    useLink ? Linker : 'span',
    {
      url: paths.posts({ series: series.name }),
      label: `${series.name} 시리즈 목록으로 ${ARIA_LABEL.MOVE}`,
      ...rest,
    },
    <span className={`series-box ${useLink ? 'badge' : 'normal'}`}>{series.name}</span>
  );
}
