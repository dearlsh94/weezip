import * as React from 'react'
import '@scss/layout/Dim.scss'

interface DimProps {
  handleClose: () => void
}

const Dim = ({ handleClose }: DimProps) => {
  return <div className="dim" onClick={handleClose} />
}

export default Dim
