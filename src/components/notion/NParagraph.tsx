import * as React from 'react'
import '@scss/notion.scss'
import { TextBlock, TextItem } from '@types'
import Linker from '@components/ui/Linker'

interface Props {
  paragraph?: TextBlock
  text?: TextItem[]
  className?: string
}

const NParagraph = ({ paragraph, text, className }: Props) => {
  let blockTexts = paragraph?.text || text || []
  return (
    <React.Fragment>
      {blockTexts && (
        <div className="block-paragraph">
          {blockTexts.length === 0 && <br />}
          {blockTexts.map((t: TextItem, i: number) => {
            let classNames = ['block-paragraph-text']
            if (className) {
              classNames.push(className)
            }
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
            if (t?.annotations?.code) {
              classNames.push('code-word')
            }
            return (
              <React.Fragment key={`block-paragraph-text-${i}`}>
                {t.href ? (
                  <Linker url={t.href} target="_blank">
                    <span
                      className={classNames.join(' ')}
                      dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                    />
                  </Linker>
                ) : (
                  <span
                    className={classNames.join(' ')}
                    dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
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

export default NParagraph
