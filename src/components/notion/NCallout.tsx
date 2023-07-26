import * as React from 'react'
import '@scss/notion.scss'
import { Callout, Children } from '@types'
import { NParagraph } from '@components/notion'
import ContentWrapper from '@module/ContentWrapper'
interface Props {
  callout: Callout
  children: Children[]
}

const NCallout = ({ callout, children = [] }: Props) => {
  const icon = callout?.icon?.emoji

  return (
    <React.Fragment>
      {callout && (
        <div className={`block-callout`}>
          {icon && <div className="icon-box">{icon}</div>}
          <NParagraph paragraph={callout} />
          {children && children?.length > 0 && <ContentWrapper childrens={children} />}
        </div>
      )}
    </React.Fragment>
  )
}

export default NCallout
