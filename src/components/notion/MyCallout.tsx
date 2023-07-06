import * as React from 'react'
import '@scss/notion.scss'
import { Callout, Children } from '@types'
import Paragraph from '@components/notion/Paragraph'
import ContentWrapper from '@module/ContentWrapper'
interface Props {
  callout: Callout
  children: Children[]
}

const MyCallout = ({ callout, children = [] }: Props) => {
  const icon = callout?.icon?.emoji

  return (
    <React.Fragment>
      {callout && (
        <div className={`block-callout`}>
          {icon && <div className="icon-box">{icon}</div>}
          <Paragraph paragraph={callout} />
          {children && children?.length > 0 && <ContentWrapper childrens={children} />}
        </div>
      )}
    </React.Fragment>
  )
}

export default MyCallout
