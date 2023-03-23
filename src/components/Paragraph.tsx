import * as React from 'react'
import { Paragraph } from '../types/componentType'
import { checkNewLine } from '../utils/convertUtils'
import { getHexByColor } from '../utils/convertUtils'

interface Props {
  paragraph?: Paragraph
}

const ContentChildren = ({ paragraph }: Props) => {
  return (
    <React.Fragment>
      {paragraph && (
        <div className="block-paragraph" style={{ color: paragraph.color }}>
          {paragraph.text?.length === 0 && <br />}
          {paragraph.text?.map((t, i) => {
            let classNames = ['block-paragraph-text']
            if (t?.annotations?.bold) classNames.push('bold')
            if (t?.annotations?.italic) classNames.push('italic')
            if (t?.annotations?.strikethrough) classNames.push('strikethrough')
            if (t?.annotations?.underline) classNames.push('underline')
            const bgColor = t?.annotations?.color.includes('_background') ? t?.annotations?.color.split('_')[0] : ''
            return (
              <div
                key={`block-paragraph-text-${i}`}
                className={classNames.join(' ')}
                style={{ color: getHexByColor(bgColor ? 'black' : t?.annotations?.color), backgroundColor: getHexByColor(bgColor, '#fff') }}
                dangerouslySetInnerHTML={{ __html: checkNewLine(t.plain_text) }}
              />
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default ContentChildren
