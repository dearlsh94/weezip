import * as React from 'react';
import './index.scss';

interface Props {
  color?: string;
  height?: number;
}

export default function Divider({ color, height }: Props) {
  return (
    <hr
      className={`block-divider ${color}`}
      style={{
        height: `${height || 1}px`,
      }}
    />
  );
}
