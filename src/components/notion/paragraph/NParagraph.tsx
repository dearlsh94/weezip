import * as React from 'react';

import './NParagraph.scss';
import { Linker } from '@components/ui';

import { Caption, RichText, TextBlock, TextItem } from '@types';


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
    blockTexts && (
      <div className="block-paragraph">
        {blockTexts.map((t: TextItem, i: number) => {
          let classNames = ['block-paragraph-text'];
          if (className) {
            classNames.push(className);
          }
          if (t?.annotations?.color) {
            classNames.push(t?.annotations?.color);
          }
          if (t?.href) {
            return (
              <Linker key={`block-paragraph-text-${i}`} aria-label={`링크 텍스트`} target="_blank" url={t.href}>
                {t.plain_text}
              </Linker>
            );
          }
          if (t?.annotations?.bold) {
            return (
              <b key={`block-paragraph-text-${i}`} className={classNames.join(' ')}>
                {t.plain_text}
              </b>
            );
          }
          if (t?.annotations?.italic) {
            return (
              <i key={`block-paragraph-text-${i}`} className={classNames.join(' ')}>
                {t.plain_text}
              </i>
            );
          }
          if (t?.annotations?.strikethrough) {
            return (
              <s key={`block-paragraph-text-${i}`} className={classNames.join(' ')}>
                {t.plain_text}
              </s>
            );
          }
          if (t?.annotations?.underline) {
            return (
              <u key={`block-paragraph-text-${i}`} className={classNames.join(' ')}>
                {t.plain_text}
              </u>
            );
          }
          if (t?.annotations?.code) {
            return (
              <code key={`block-paragraph-text-${i}`} className={classNames.join(' ')}>
                {t.plain_text}
              </code>
            );
          }
          const text = t.plain_text.replaceAll('\n', '<br/>');
          return (
            <React.Fragment key={`block-paragraph-text-${i}`}>
              <p className={classNames.join(' ')} dangerouslySetInnerHTML={{ __html: text }} />
            </React.Fragment>
          );
        })}
      </div>
    )
  );
}
