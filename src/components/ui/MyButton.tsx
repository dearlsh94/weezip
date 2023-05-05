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
  text: string
  handleClick: Function
  width: number | '100%'
}

const MyButton = ({ size, color, type, text, handleClick, width }: Props) => {
  return (
    <button
      className={`my-button ${size} ${color} ${type}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
      }}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  )
}

export default MyButton
