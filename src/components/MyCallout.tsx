import * as React from 'react'
import '../scss/components.scss'
import { Callout } from '../types'
import Paragraph from './Paragraph'
interface Props {
  callout: Callout
}

const MyCallout = ({ callout }: Props) => {
  const icon = callout?.icon?.emoji

  return (
    <React.Fragment>
      {callout && (
        <div className={`block-callout`}>
          {icon && <div className="icon-box">{icon}</div>}
          <Paragraph paragraph={callout} />
        </div>
      )}
    </React.Fragment>
  )
}

export default MyCallout
