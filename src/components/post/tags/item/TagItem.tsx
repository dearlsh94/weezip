import React from 'react';

import './TagItem.scss';
import { Linker } from '@components/ui';

interface TagItem {
  name: string;
  useLink?: boolean;
}

export default function TagItem({ name, useLink = false, ...rest }: TagItem) {
  return React.createElement(
    useLink ? Linker : 'span',
    {
      url: `/list?tag=${name}`,
      'aria-label': `${name} 목록으로 이동`,
      ...rest,
    },
    <span className={`tag-item linked`}>#{name}</span>
  );
}
