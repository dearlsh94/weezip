import Linker from '@components/ui/Linker';
import React from 'react';
import './index.scss';

interface TagItem {
  name: string;
  useLink?: boolean;
}

export default function TagItem({ name, useLink = false }: TagItem) {
  return (
    <>
      {useLink ? (
        <span>
          <Linker url={`/list?tag=${name}`} aria-label={`${name} 목록으로 이동`}>
            <span className={`tag-item linked`}>#{name}</span>
          </Linker>
        </span>
      ) : (
        <span className="tag-item" key={`tag-${name}`}>
          #{name}
        </span>
      )}
    </>
  );
}
