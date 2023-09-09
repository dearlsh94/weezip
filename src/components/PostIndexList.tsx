import * as React from 'react'
import '@scss/components/PostIndexList.scss'

interface PostIndexListProps {
  list: HTMLHeadingElement[]
  useMoveTop?: boolean
}

const PostIndexList = ({ list, useMoveTop = false }: PostIndexListProps) => {
  const move = (item: HTMLHeadingElement) => {
    window.scrollTo({
      top: item.offsetTop,
      behavior: 'smooth',
    })
  }

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ul className={`block-header-index-list`}>
      {useMoveTop && (
        <li className="tag-top" onClick={moveTop}>
          맨위로
        </li>
      )}
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
