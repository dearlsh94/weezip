import * as React from 'react'
import '../scss/components.scss'
import { Code } from '../types'
import Paragraph from './Paragraph'
interface Props {
  code: Code
}

const MyCode = ({ code }: Props) => {
  console.log({ code })
  return (
    <React.Fragment>
      <div className={`block-code ${code.caption && 'caption'} ${code.language && 'language'}`}>
        {code.language && <div className="language">{code.language}</div>}
        <Paragraph text={code.text} />
        {code.caption && (
          <div className="caption">
            <Paragraph text={code.caption} />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default MyCode
