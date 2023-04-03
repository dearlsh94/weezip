import * as React from 'react'
import '../scss/components.scss'
import { HeaderIndex } from '../types'

interface Props {
  list: HeaderIndex[]
}

const HeaderIndexList = ({ list }: Props) => {
  return (
    <React.Fragment>
      <div className={`block-header-index-list`}>
        {list.map((item, i) => {
          return (
            <div className={`tag-${item.tag}`} key={`header-index-item-${i}`}>
              {item.text}
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default HeaderIndexList
