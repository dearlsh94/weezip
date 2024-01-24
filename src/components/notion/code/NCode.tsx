import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './NCode.scss';

import { IconCopyLink } from '@components/icon';
import { NParagraph } from '@components/notion';
import useClipboard from '@hooks/useClipboard';
import { getPlainTextByRichText } from '@utils/notion';

import { Code } from '@types';

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
        <IconCopyLink color={'primary'} size={20} onClick={handleCodeCopy} />
      </div>
      <SyntaxHighlighter language={code.language} showLineNumbers={true} style={vscDarkPlus}>
        {codeString}
      </SyntaxHighlighter>
      {code.caption.length > 0 && (
        <figcaption className="caption">
          <NParagraph richText={code.caption} />
        </figcaption>
      )}
    </figure>
  );
}
