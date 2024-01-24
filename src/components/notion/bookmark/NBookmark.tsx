import * as React from 'react';

import { NParagraph } from '@components/notion';
import { Linker } from '@components/ui';

import { Bookmark, TextBlock, TextItem } from '@types';

interface NBookmarkProps {
  bookmark: Bookmark;
}

export default function NBookmark({ bookmark }: NBookmarkProps) {
  return (
    <Linker aria-label={`${bookmark.url} 위치로 이동`} target="_blank" url={bookmark.url}>
      {bookmark.caption?.length > 0 ? (
        bookmark.caption.map((c: TextItem, i) => {
          const captionParagraph: TextBlock = {
            color: 'gray',
            rich_text: [c],
          };
          return (
            <span key={`bookmark-caption-${i}`}>
              <NParagraph paragraph={captionParagraph} />
            </span>
          );
        })
      ) : (
        <span>{bookmark.url}</span>
      )}
    </Linker>
  );
}
