import * as React from 'react';
import './MyButton.scss';

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

interface MyBUttonProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
  size: ButtonSize;
  color: ButtonColor;
  type: ButtonType;
  width?: number | '100%';
}

export default function MyButton({ size, color, type, width, className, children, ...rest }: MyBUttonProps) {
  return (
    <button
      className={`my-button ${size} ${color} ${type} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
