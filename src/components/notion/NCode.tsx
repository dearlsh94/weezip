import * as React from 'react'
import { Code } from '@types'
import '@scss/notion.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { NParagraph } from '@components/notion'
// import { IconCopyLink } from '@components/icon'
// import useClipboard from '@src/hooks/useClipboard'

interface NCodeProps {
  code: Code
}

export default function NCode({ code }: NCodeProps) {
  const codeString = code.text?.reduce((codeString, text) => (codeString += text.plain_text), '')

  // const { copyToClipboard } = useClipboard()
  // const handleCodeCopy = () => {
  //   copyToClipboard(codeString)
  // }

  return (
    <div className={`block-code ${code.caption && 'caption'} ${code.language && 'language'}`}>
      <div className="header">
        <div className="language">{code.language}</div>
        {/* <IconCopyLink size={20} color={'primary'} handleClick={handleCodeCopy} /> */}
      </div>
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
