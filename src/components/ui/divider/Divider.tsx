import * as React from 'react';
import './Divider.scss';

interface DividerProps {
  color?: string;
  height?: number;
}

export default function Divider({ color, height }: DividerProps) {
  return (
    <hr
      className={`block-divider ${color}`}
      style={{
        height: `${height || 1}px`,
      }}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
