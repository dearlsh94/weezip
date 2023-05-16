import * as React from 'react'
import '@scss/components/FloatBox.scss'
import IconDoubleArrow from '@components/icon/IconDoubleArrow'
import CircleIconWrapper from '@components/icon/CircleIconWrapper'

interface Props {
  useTop: boolean
}

const FloatBox = ({ useTop }: Props) => {
  const moveTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="float-box">
      {useTop && (
        <div className="top-button-box" onClick={moveTop}>
          <CircleIconWrapper color="secondary">
            <IconDoubleArrow direction="top" size={36} />
          </CircleIconWrapper>
        </div>
      )}
    </div>
  )
}

export default FloatBox
