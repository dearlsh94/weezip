import * as React from 'react';
import './Divider.scss';

interface DividerProps {
  color?: string;
  height?: number;
}

export default function Divider({ color, height }: DividerProps) {
  return (
    <hr
      aria-orientation="horizontal"
      className={`block-divider ${color}`}
      role="separator"
      style={{
        height: `${height || 1}px`,
      }}
    />
  );
}
