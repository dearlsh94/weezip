import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import '../../scss/components.scss'
import { Children, TextBlock } from '../../types'
import Paragraph from './Paragraph'
import ContentWrapper from '../../module/ContentWrapper'

interface Props {
  toggle: TextBlock
  hasChild: boolean
  childList: Children[]
}

const MyToggle = ({ toggle, hasChild, childList }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      {toggle && (
        <div className="block-toggle">
          <div className="toggle-title-box" onClick={() => setIsOpen(!isOpen)}>
            <div className={`icon-box ${isOpen ? 'open' : ''}`}>
              <StaticImage src={`../../images/icon-arrow-right.svg`} alt={`확장 축소 아이콘`} />
            </div>
            <Paragraph paragraph={toggle} />
          </div>
          <div className="toggle-content-box">
            {isOpen && hasChild && childList?.length > 0 && <ContentWrapper childrens={childList} />}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default MyToggle
