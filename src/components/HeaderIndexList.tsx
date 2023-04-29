import * as React from 'react'
import { useEffect, useState } from 'react'
import '@scss/components.scss'
import { throttle } from '@utils/commonUtils'

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
  const moveTop = () => [
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }),
  ]
  const [status, setStatus] = useState('')

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        setStatus('scroll')
      } else {
        setStatus('')
      }
    }
    const throttledScrollHandler = throttle(scrollHandler)

    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [])

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
      <ul className={`block-header-index-list right ${status}`}>
        <li onClick={() => moveTop()}>처음으로</li>
        {list.map((item, i) => {
          const tag = item.tagName.toLowerCase()
          const text = item.outerText
          return (
            <li className={`tag-${tag}`} key={`header-index-scroll-item-${i}`} onClick={() => move(item)}>
              {text}
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default HeaderIndexList
