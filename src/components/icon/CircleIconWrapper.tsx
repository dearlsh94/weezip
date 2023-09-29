import * as React from 'react';
import '@scss/CircleIconWrapper.scss';

interface CircleIconWrapperProps {
  children: React.ReactNode;
  color: 'mono' | 'reverse-mono' | 'secondary';
  size?: number;
}

const CircleIconWrapper = ({ children, color = 'mono', size = 36 }: CircleIconWrapperProps) => {
  return (
    <div
      className={`circle-icon-wrapper ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {children}
    </div>
  );
};

export default CircleIconWrapper;
