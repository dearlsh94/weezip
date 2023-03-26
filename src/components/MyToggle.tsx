import * as React from 'react'
import '../scss/components.scss'
import { Children, TextBlock } from '../types'
import Paragraph from './Paragraph'
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
            <div>
              {isOpen ? (
                <img src="/icon-arrow-down.png" alt="icon expanded" />
              ) : (
                <img src="/icon-arrow-right.png" alt="icon reduced" />
              )}
            </div>
            <Paragraph paragraph={toggle} />
          </div>
          <div className="toggle-content-box">
            {isOpen && hasChild && childList?.length > 0 && <div>Toggle Content</div>}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default MyToggle
