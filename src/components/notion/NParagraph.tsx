import * as React from 'react';
import '@scss/notion.scss';
import { Caption, RichText, TextBlock, TextItem } from '@types';
import Linker from '@components/ui/Linker';

interface NParagraphProps {
  paragraph?: TextBlock;
  richText?: RichText | Caption;
  className?: string;
}

export default function NParagraph({ paragraph, richText, className }: NParagraphProps) {
  let blockTexts = paragraph?.rich_text || richText || [];
  if (blockTexts.length === 0) {
    return <br />;
  }
  return (
    <>
      {blockTexts && (
        <div className="block-paragraph">
          {blockTexts.map((t: TextItem, i: number) => {
            let classNames = ['block-paragraph-text'];
            if (className) {
              classNames.push(className);
            }
            if (t?.href) {
              return (
                <Linker key={`block-paragraph-text-${i}`} url={t.href} target="_blank" aria-label={`링크 텍스트`}>
                  <span
                    className={classNames.join(' ')}
                    dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                  />
                </Linker>
              );
            }
            if (t?.annotations?.bold) {
              return (
                <b
                  key={`block-paragraph-text-${i}`}
                  className={classNames.join(' ')}
                  dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                />
              );
            }
            if (t?.annotations?.italic) {
              return (
                <i
                  key={`block-paragraph-text-${i}`}
                  className={classNames.join(' ')}
                  dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                />
              );
            }
            if (t?.annotations?.strikethrough) {
              return (
                <s
                  key={`block-paragraph-text-${i}`}
                  className={classNames.join(' ')}
                  dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                />
              );
            }
            if (t?.annotations?.underline) {
              return (
                <u
                  key={`block-paragraph-text-${i}`}
                  className={classNames.join(' ')}
                  dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                />
              );
            }
            if (t?.annotations?.code) {
              classNames.push('code-word');
              return (
                <code
                  key={`block-paragraph-text-${i}`}
                  className={classNames.join(' ')}
                  dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                />
              );
            }
            if (t?.annotations?.color) {
              classNames.push(t?.annotations?.color);
            }
            return (
              <React.Fragment key={`block-paragraph-text-${i}`}>
                <span
                  className={classNames.join(' ')}
                  dangerouslySetInnerHTML={{ __html: t.plain_text.replaceAll('\n', '<br/>') }}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}
