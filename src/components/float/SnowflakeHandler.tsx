import { CircleIconWrapper } from '@components/icon';
import IconSnow from '@components/icon/IconSnow';
import { useSnowflakeStore } from '@store/configStore';
import React from 'react';

export default function SnowflakeHandler() {
  const { isShow, change } = useSnowflakeStore();

  const handleSnow = () => {
    change();
  };

  return (
    <div className={`snowflake-button-box`} onClick={handleSnow}>
      <CircleIconWrapper color="secondary" size={44}>
        <IconSnow direction="top" color={`${isShow ? `base` : `secondary`}`} />
      </CircleIconWrapper>
    </div>
  );
}
