import React from 'react';

import { IconSnow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { useSnowflakeStore } from '@store/config';

export default function SnowflakeHandler() {
  const { isShow, change } = useSnowflakeStore();

  return (
    <CircleIconWrapper color="secondary" size={44} onClick={change}>
      <IconSnow direction="top" color={`${isShow ? `primary` : `secondary`}`} />
    </CircleIconWrapper>
  );
}
