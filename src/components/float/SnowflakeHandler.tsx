import { IconSnow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { useSnowflaketore } from '@store/configStore';
import React from 'react';

export default function SnowflakeHandler() {
  const { isShow, change } = useSnowflaketore();

  const handleSnow = () => {
    change();
  };

  return (
    <CircleIconWrapper color="secondary" size={44} onClick={handleSnow}>
      <IconSnow direction="top" color={`${isShow ? `primary` : `secondary`}`} />
    </CircleIconWrapper>
  );
}
