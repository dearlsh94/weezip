import * as React from 'react';
import '@scss/components/TagBadge.scss';
import Linker from '../ui/linker';

interface Props {
  tagNames: string[];
  isLink?: boolean;
}

const TagBadges = ({ tagNames, isLink = true }: Props) => {
  return (
    <>
      {tagNames && (
        <div className="badge-box">
          {tagNames.map(tag =>
            isLink ? (
              <span key={`tag-badge-${tag}`}>
                <Linker url={`/list?tag=${tag}`} aria-label={`${tag} 목록으로 이동`}>
                  <span className={`badge linked`}>#{tag}</span>
                </Linker>
              </span>
            ) : (
              <span className={`badge`} key={`tag-badge-${tag}`}>
                #{tag}
              </span>
            )
          )}
        </div>
      )}
    </>
  );
};

export default TagBadges;
