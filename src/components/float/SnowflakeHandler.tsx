import React from 'react';

import { IconSnow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { useSnowflakeStore } from '@store/config';

export default function SnowflakeHandler() {
  const { isShow, change } = useSnowflakeStore();

  return (
    <CircleIconWrapper
      aria-label={`눈송이 효과 ${isShow ? '끄기' : '켜기'}`}
      color="secondary"
      size={44}
      onClick={change}
    >
      <IconSnow color={`${isShow ? `primary` : `secondary`}`} direction="top" />
    </CircleIconWrapper>
  );
}
