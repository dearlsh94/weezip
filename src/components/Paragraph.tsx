import * as React from 'react'
import { TextBlock, TextItem } from '../types/componentType'
import { checkNewLine } from '../utils/convertUtils'
import Linker from './Linker'

interface Props {
  paragraph?: TextBlock
}

const ContentChildren = ({ paragraph }: Props) => {
  return (
    <React.Fragment>
      {paragraph && (
        <div className="block-paragraph">
          {paragraph.text?.length === 0 && <br />}
          {paragraph.text?.map((t: TextItem, i: number) => {
            let classNames = ['block-paragraph-text']
            if (t?.annotations?.bold) {
              classNames.push('bold')
            }
            if (t?.annotations?.italic) {
              classNames.push('italic')
            }
            if (t?.annotations?.strikethrough) {
              classNames.push('strikethrough')
            }
            if (t?.annotations?.underline) {
              classNames.push('underline')
            }
            if (t?.annotations?.color) {
              classNames.push(t?.annotations?.color)
            }
            return (
              <React.Fragment key={`block-paragraph-text-${i}`}>
                {t.href ? (
                  <Linker url={t.href} target="_blank">
                    <span
                      className={classNames.join(' ')}
                      dangerouslySetInnerHTML={{ __html: checkNewLine(t.plain_text) }}
                    />
                  </Linker>
                ) : (
                  <span
                    className={classNames.join(' ')}
                    dangerouslySetInnerHTML={{ __html: checkNewLine(t.plain_text) }}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default ContentChildren
