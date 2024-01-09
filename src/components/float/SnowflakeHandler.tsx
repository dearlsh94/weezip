import { IconSnow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { useSnowflakeStore } from '@store/configStore';
import React from 'react';

export default function SnowflakeHandler() {
  const { isShow, change } = useSnowflakeStore();

  const handleSnow = () => {
    change();
  };

  return (
    <CircleIconWrapper color="secondary" size={44} onClick={handleSnow}>
      <IconSnow direction="top" color={`${isShow ? `base` : `secondary`}`} />
    </CircleIconWrapper>
  );
}
