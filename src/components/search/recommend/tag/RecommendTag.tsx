import * as React from 'react';
import './RecommendTag.scss';
import { HelpText } from '@components/ui/text';
import { RECOMMEND_TAGS } from '@src/constants';
import { Linker } from '@components/ui';

export default function RecommendTag() {
  return (
    <div className="recommend-post-tag">
      <HelpText text={'이런 건 어때요?'} />
      {RECOMMEND_TAGS.map(tag => (
        <Linker
          key={`recommend-item-${tag.name}`}
          url={tag.url}
          className="item"
          aria-label={`${tag.name} 목록으로 이동`}
        >
          #{tag.name}
        </Linker>
      ))}
    </div>
  );
}
