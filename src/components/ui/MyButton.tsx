import * as React from 'react'
import '@scss/components/ui/MyButton.scss'

export enum ButtonSize {
  PRIMARY = 'SIZE-PRIMARY',
  SECONDARY = 'SIZE-SECONDARY',
  THIRD = 'SIZE-THIRD',
  FOURTH = 'SIZE-FOURTH',
}

export enum ButtonColor {
  PRIMARY = 'COLOR-PRIMARY',
  SECONDARY = 'COLOR-SECONDARY',
  THIRD = 'COLOR-THIRD',
}

export enum ButtonType {
  BORDER = 'TYPE-BORDER',
  BG = 'TYPE-BG',
}

interface Props {
  size: ButtonSize
  color: ButtonColor
  type: ButtonType
  handleClick?: Function
  width?: number | '100%'
  className?: string
  children?: React.ReactNode
}

const MyButton = ({ size, color, type, handleClick, width, className, children }: Props) => {
  const click = () => {
    handleClick && handleClick()
  }
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
  )
}

export default MyButton
