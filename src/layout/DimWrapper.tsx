import * as React from 'react'
import '@scss/layout/DimWrapper.scss'

interface Props {
  children: React.ReactNode
  handleClose?: Function
}

const DimWrapper = ({ children, handleClose }: Props) => {
  const handleDimClick = () => {
    handleClose && handleClose()
  }
  return (
    <React.Fragment>
      <div className="dim-wrapper">
        <div className="content">{children}</div>
        <div className="dim" onClick={handleDimClick} />
      </div>
    </React.Fragment>
  )
}

export default DimWrapper
