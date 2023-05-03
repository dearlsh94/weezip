import * as React from 'react'
import { BlockType, Children } from '@types'
import ContentChildren from '@module/ContentChildren'

interface Props {
  childrens: Children[]
  align?: 'center'
}

const ContentWrapper = ({ childrens = [], align }: Props) => {
  let numberedList: Children[] = []
  let bulletedList: Children[] = []
  return (
    <section className={`content-wrapper ${align ? align : ''}`}>
      {childrens.map((block, i) => {
        // NOTE Type number list : 항목별 별도의 block으로 나뉘어져 응답이 와서 별도 처리로 합쳐준다.
        if (block.type === BlockType.NUMBERED_LIST_ITEM) {
          numberedList.push(block)

          // 다음 block이 numbered_list가 아닐 경우 렌더링.
          if (
            numberedList?.length > 0 &&
            childrens[Math.min(i + 1, childrens.length)]?.type !== BlockType.NUMBERED_LIST_ITEM
          ) {
            const renderList = numberedList
            numberedList = []
            return (
              <ol key={i} className={`block-numbered-list`}>
                {renderList?.map((item, i) => {
                  return (
                    <li key={`numbered-list-${i}`}>
                      <ContentChildren block={item} />
                    </li>
                  )
                })}
              </ol>
            )
          } else {
            return
          }
        }

        // NOTE Type bullet list : 항목별 별도의 block으로 나뉘어져 응답이 와서 별도 처리로 합쳐준다.
        if (block.type === BlockType.BULLETED_LIST_ITEM) {
          bulletedList.push(block)
          // 다음 block이 numbered_list가 아닐 경우 렌더링.
          if (
            bulletedList?.length > 0 &&
            childrens[Math.min(i + 1, childrens.length)]?.type !== BlockType.BULLETED_LIST_ITEM
          ) {
            const renderList = bulletedList
            bulletedList = []
            return (
              <ul key={i} className={`block-bulleted-list`}>
                {renderList?.map((item, i) => {
                  return (
                    <li key={`bulleted-list-${i}`} className={`bulleted-list-${i}`}>
                      <ContentChildren block={item} />
                    </li>
                  )
                })}
              </ul>
            )
          } else {
            return
          }
        }

        return (
          <div key={i} className={`content-wrapper`}>
            <ContentChildren block={block} />
          </div>
        )
      })}
    </section>
  )
}

export default ContentWrapper
