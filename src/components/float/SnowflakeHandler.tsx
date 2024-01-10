import { IconSnow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { useSnowflakeStore } from '@store/configStore';
import React from 'react';

export default function SnowflakeHandler() {
  const { isShow, change } = useSnowflakeStore();

  return (
    <CircleIconWrapper color="secondary" size={44} onClick={change}>
      <IconSnow direction="top" color={`${isShow ? `primary` : `secondary`}`} />
    </CircleIconWrapper>
  );
}
