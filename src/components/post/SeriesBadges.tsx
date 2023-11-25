import * as React from 'react';
import '@scss/components/SeriesBadge.scss';
import Linker from '../ui/Linker';
import { MultiSelect } from '@types';

interface SeriesBadgesProps {
  series: MultiSelect;
  isLink?: boolean;
}

const SeriesBadges = ({ series, isLink = true }: SeriesBadgesProps) => {
  return (
    <>
      {series && (
        <div className="series-badges-box">
          {series.map(s =>
            isLink ? (
              <span key={`series-badge-${s.id}`}>
                <Linker
                  url={`/list?series=${encodeURIComponent(s.name)}`}
                  aria-label={`${s.name} 시리즈 목록으로 이동`}
                >
                  <span className={`badge linked`}>[{s.name}]</span>
                </Linker>
              </span>
            ) : (
              <span className={`badge`} key={`tag-badge-${s.id}`}>
                [{s.name}]
              </span>
            )
          )}
        </div>
      )}
    </>
  );
};

export default SeriesBadges;
