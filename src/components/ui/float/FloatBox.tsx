import * as React from 'react';

import './FloatBox.scss';
import MoveTopButton from '@components/float/MoveTopButton';
import SnowflakeHandler from '@components/float/SnowflakeHandler';

interface FloatBoxProps {
  useTop?: boolean;
  useSnowflake?: boolean;
}

export default function FloatBox({ useTop, useSnowflake }: FloatBoxProps) {
  return (
    <div className={`float-box`}>
      {useTop && <MoveTopButton />}
      {useSnowflake && <SnowflakeHandler />}
    </div>
  );
}
