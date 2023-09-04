import * as React from 'react'
import '@scss/components/PostIndexList.scss'

interface PostIndexListProps {
  list: HTMLHeadingElement[]
}

const PostIndexList = ({ list }: PostIndexListProps) => {
  const move = (item: HTMLHeadingElement) => {
    window.scrollTo({
      top: item.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
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
  )
}

export default PostIndexList
