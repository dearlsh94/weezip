import * as React from 'react';
import '@scss/components/FloatBox.scss';
import MoveTopButton from '@components/float/MoveTopButton';
import SnowflakeHandler from '@components/float/SnowflakeHandler';

interface Props {
  useTop?: boolean;
  useSnowflake?: boolean;
}

const FloatBox = ({ useTop, useSnowflake }: Props) => {
  return (
    <div className={`float-box`}>
      {useTop && <MoveTopButton />}
      {useSnowflake && <SnowflakeHandler />}
    </div>
  );
};

export default FloatBox;
