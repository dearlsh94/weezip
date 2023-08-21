import * as React from 'react'
import '@scss/notion.scss'
import { Children, TextBlock } from '@types'
import { NParagraph } from '@components/notion'
import ContentWrapper from '@module/ContentWrapper'
import { IconArrow } from '@components/icon'

interface Props {
  toggle: TextBlock
  hasChild: boolean
  childList: Children[]
}

const NToggle = ({ toggle, hasChild, childList }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      {toggle && (
        <div className="block-toggle">
          <div className="toggle-title-box" onClick={() => setIsOpen(!isOpen)}>
            <div className={`icon-box ${isOpen ? 'open' : ''}`}>
              <IconArrow direction="right" size={16} />
            </div>
            <NParagraph paragraph={toggle} />
          </div>
          <div className="toggle-content-box">
            {isOpen && hasChild && childList?.length > 0 && <ContentWrapper childrens={childList} />}
          </div>
        </div>
      )}
    </>
  )
}

export default NToggle
