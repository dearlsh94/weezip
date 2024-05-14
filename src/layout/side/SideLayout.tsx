import * as React from 'react';
import { useState, ReactNode } from 'react';

import './SideLayout.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import { IconSingleArrow } from '@components/icon';

interface Option {
  useExpandControl: boolean;
}
interface SideLayoutProps {
  children: ReactNode;
  option?: Option;
}

export default function SideLayout({ option, children }: SideLayoutProps) {
  const { useExpandControl } = option || {};
  const [isExpand, setIsExpand] = useState(true);
  const handleToggleExpand = () => setIsExpand(prev => !prev);

  return (
    <GlobalPortal.Consumer>
      <aside aria-modal={true} className={`side-layout ${isExpand ? 'expand' : 'shrink'}`}>
        {isExpand && <div className={`content`}>{children}</div>}
      </aside>

      {useExpandControl && (
        <button className={`side-layout-controller ${isExpand ? 'expand' : 'shrink'}`} onClick={handleToggleExpand}>
          <IconSingleArrow color={'primary'} direction={isExpand ? 'left' : 'right'} />
        </button>
      )}
    </GlobalPortal.Consumer>
  );
}
