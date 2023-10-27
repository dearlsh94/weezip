import * as React from 'react';
import '@scss/notion.scss';
import { Bookmark, TextBlock, TextItem } from '@types';
import Linker from '@components/ui/Linker';
import { NParagraph } from '@components/notion';
interface NBookmarkProps {
  bookmark: Bookmark;
}

export default function NBookmark({ bookmark }: NBookmarkProps) {
  return (
    <>
      {bookmark && (
        <Linker url={bookmark.url} target="_blank" aria-label={`${bookmark.url} 위치로 이동`}>
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
      )}
    </>
  );
}
