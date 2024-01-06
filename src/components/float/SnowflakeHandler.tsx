import { CircleIconWrapper, IconSnow } from '@components/icon';
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
