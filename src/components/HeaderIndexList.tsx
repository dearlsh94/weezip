import * as React from 'react'
import '../scss/components.scss'
import { HeaderIndex } from '../types'

interface Props {
  list: HTMLHeadingElement[]
}

const HeaderIndexList = ({ list }: Props) => {
  const move = (item: HTMLHeadingElement) => {
    const elHeader = document.getElementById('header')
    window.scrollTo({
      top: item.offsetTop - ((elHeader?.clientHeight || 0) + 12), // minus header height + margin
      behavior: 'smooth',
    })
  }
  return (
    <React.Fragment>
      <ul className={`block-header-index-list`}>
        {list.map((item, i) => {
          const tag = item.tagName.toLowerCase()
          const text = item.outerText
          return (
            <li className={`tag-${tag}`} key={`header-index-item-${i}`} onClick={() => move(item)}>
              {text}
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default HeaderIndexList
