import * as React from 'react';
import './index.scss';

export enum ButtonSize {
  PRIMARY = 'SIZE-PRIMARY',
  SECONDARY = 'SIZE-SECONDARY',
  THIRD = 'SIZE-THIRD',
  FOURTH = 'SIZE-FOURTH',
}

export enum ButtonColor {
  PRIMARY = 'COLOR-PRIMARY',
  SECONDARY = 'COLOR-SECONDARY',
}

export enum ButtonType {
  BORDER = 'TYPE-BORDER',
  BG = 'TYPE-BG',
}

interface MyBUttonProps {
  size: ButtonSize;
  color: ButtonColor;
  type: ButtonType;
  handleClick?: Function;
  width?: number | '100%';
  className?: string;
  children?: React.ReactNode;
}

export default function MyButton({ size, color, type, handleClick, width, className, children }: MyBUttonProps) {
  const click = () => {
    handleClick && handleClick();
  };
  return (
    <button
      className={`my-button ${size} ${color} ${type} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
      }}
      onClick={click}
    >
      {children}
    </button>
  );
}
