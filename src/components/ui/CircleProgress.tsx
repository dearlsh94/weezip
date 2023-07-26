import * as React from 'react'
import '@scss/components/ui/CircleProgress.scss'
import { IconCircleProgress } from '@components/icon'

interface Props {
  height?: number
}

const CircleProgress = ({ height }: Props) => {
  return (
    <React.Fragment>
      <div
        className="circle-progress-box"
        style={{
          height: height ? `${height}px` : 'auto',
        }}
      >
        <IconCircleProgress />
      </div>
    </React.Fragment>
  )
}

export default CircleProgress
