import * as React from 'react'
import '../../scss/components.scss'
import { Bookmark, TextBlock, TextItem } from '../../types'
import Linker from '../Linker'
import Paragraph from './Paragraph'
interface Props {
  bookmark: Bookmark
}

const MyBookmark = ({ bookmark }: Props) => {
  return (
    <React.Fragment>
      {bookmark && (
        <Linker url={bookmark.url} target="_blank">
          {bookmark.caption?.length > 0 ? (
            bookmark.caption.map((c: TextItem, i) => {
              const captionParagraph: TextBlock = {
                color: 'gray',
                text: [c],
              }
              return (
                <span key={`bookmark-caption-${i}`}>
                  <Paragraph paragraph={captionParagraph} />
                </span>
              )
            })
          ) : (
            <span>{bookmark.url}</span>
          )}
        </Linker>
      )}
    </React.Fragment>
  )
}

export default MyBookmark
