import * as React from 'react';
import '@scss/components/ui/CircleProgress.scss';
import { IconCircleProgress } from '@components/icon';

interface Props {
  height?: number;
}

const CircleProgress = ({ height }: Props) => {
  return (
    <div
      className="circle-progress-box"
      style={{
        height: height ? `${height}px` : 'auto',
      }}
    >
      <IconCircleProgress color={'primary'} viewBox={'0 0 2048 2048'} />
    </div>
  );
};

export default CircleProgress;
