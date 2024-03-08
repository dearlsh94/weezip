import * as React from 'react';
import { useState, useEffect, ReactNode } from 'react';

import './SideLayout.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import { IconSingleArrow } from '@components/icon';
import { DimLayout } from '@layout/dim';

interface SideLayoutProps {
  children: ReactNode;
  useExpand?: boolean;
  handleClose?: () => void;
}

export default function SideLayout({ handleClose, useExpand = false, children }: SideLayoutProps) {
  const [isExpand, setIsExpand] = useState(false);

  useEffect(() => {
    setIsExpand(true);
  }, []);

  const handleToggleExpand = () => setIsExpand(prev => !prev);

  return (
    <GlobalPortal.Consumer>
      <DimLayout handleClose={handleClose}>
        <aside className={`side-layout ${isExpand ? 'expand' : 'shrink'}`}>
          {isExpand && <div className={`content`}>{children}</div>}
        </aside>
        {useExpand && (
          <button className={`side-layout-controller ${isExpand ? 'expand' : 'shrink'}`} onClick={handleToggleExpand}>
            <IconSingleArrow color={'primary'} direction={isExpand ? 'left' : 'right'} />
          </button>
        )}
      </DimLayout>
    </GlobalPortal.Consumer>
  );
}
