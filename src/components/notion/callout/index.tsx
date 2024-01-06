import * as React from 'react';
import './index.scss';
import { Callout, Children } from '@types';
import { NParagraph } from '@components/notion';
import ContentWrapper from '@components/post/contents';
interface NCalloutProps {
  callout: Callout;
  children: Children[];
}

export default function NCallout({ callout, children = [] }: NCalloutProps) {
  const icon = callout?.icon?.emoji;

  return (
    <>
      {callout && (
        <aside className={`block-callout`}>
          {icon && <div className="icon-box">{icon}</div>}
          <NParagraph paragraph={callout} />
          {children && children?.length > 0 && <ContentWrapper childrens={children} />}
        </aside>
      )}
    </>
  );
}
