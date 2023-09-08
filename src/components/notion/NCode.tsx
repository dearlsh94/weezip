import * as React from 'react'
import { Code } from '@types'
import '@scss/notion.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { NParagraph } from '@components/notion'

interface Props {
  code: Code
}

const NCode = ({ code }: Props) => {
  const codeString = code.text?.reduce((codeString, text) => (codeString += text.plain_text), '')
  return (
    <div className={`block-code ${code.caption && 'caption'} ${code.language && 'language'}`}>
      {code.language && <div className="language">{code.language}</div>}
      <SyntaxHighlighter language={'HTML'} style={atelierCaveDark} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>
      {code.caption && (
        <div className="caption">
          <NParagraph text={code.caption} />
        </div>
      )}
    </div>
  )
}

export default NCode
