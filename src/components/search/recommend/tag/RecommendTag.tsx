import * as React from 'react';

import './RecommendTag.scss';
import { Linker } from '@components/ui';
import { HelpText } from '@components/ui/text';
import { RECOMMEND_TAGS } from '@src/constants';

export default function RecommendTag() {
  return (
    <div className="recommend-post-tag">
      <HelpText text={'이런 건 어때요?'} />
      {RECOMMEND_TAGS.map(tag => (
        <Linker key={`recommend-item-${tag.name}`} label={`${tag.name} 목록으로 이동`} className="item" url={tag.url}>
          #{tag.name}
        </Linker>
      ))}
    </div>
  );
}
