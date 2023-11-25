import * as React from 'react';
import { Code } from '@types';
import '@scss/notion.scss';
import { NParagraph } from '@components/notion';
import { IconCopyLink } from '@components/icon';
import useClipboard from '@src/hooks/useClipboard';
import { getPlainTextByRichText } from '@utils/notionUtils';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface NCodeProps {
  code: Code;
}

export default function NCode({ code }: NCodeProps) {
  const codeString = getPlainTextByRichText(code.rich_text);
  const { copyToClipboard } = useClipboard();
  const handleCodeCopy = async () => {
    await copyToClipboard(codeString);
    alert('해당 코드가 복사되었습니다.');
  };

  return (
    <figure className={`block-code ${code.caption && 'caption'} ${code.language && 'language'}`}>
      <div className="code-header">
        <small className="language">{code.language}</small>
        <IconCopyLink size={20} color={'primary'} handleClick={handleCodeCopy} />
      </div>
      <SyntaxHighlighter language={code.language} style={dark} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>
      {code.caption && (
        <figcaption className="caption">
          <NParagraph richText={code.caption} />
        </figcaption>
      )}
    </figure>
  );
}
