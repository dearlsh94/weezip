import React from 'react';

import './TagItem.scss';
import { Linker } from '@components/ui';
import { ARIA_LABEL } from '@src/constants';
import { paths } from '@utils/url';

interface TagItem {
  name: string;
  useLink?: boolean;
}

export default function TagItem({ name, useLink = false, ...rest }: TagItem) {
  return React.createElement(
    useLink ? Linker : 'span',
    {
      url: paths.posts({ tag: name }),
      label: `${name} 목록으로 ${ARIA_LABEL.MOVE}`,
      ...rest,
    },
    <span className={`tag-item linked`}>#{name}</span>
  );
}
