import * as React from 'react'
import { useEffect, useState } from 'react'
import '@scss/components/PostIndexList.scss'
import { throttle } from '@utils/commonUtils'

interface Props {
  list: HTMLHeadingElement[]
}

const PostIndexList = ({ list }: Props) => {
  const move = (item: HTMLHeadingElement) => {
    window.scrollTo({
      top: item.offsetTop,
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
    <>
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
      {/* NOTE 1280px 이상 해상도에서 스크롤 내릴 경우, 글 우측에 목차 생성 */}
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
    </>
  )
}

export default PostIndexList
