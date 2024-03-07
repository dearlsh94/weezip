import * as React from 'react';
import { ReactNode } from 'react';

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
  const [isExpand, setIsExpand] = React.useState(true);

  const handleToggleExpand = () => setIsExpand(prev => !prev);

  return (
    <GlobalPortal.Consumer>
      <DimLayout handleClose={handleClose}>
        <aside className={`side-layout ${isExpand ? 'expand' : 'shrink'}`}>
          {isExpand && <div className={`content`}>{children}</div>}
          {useExpand && (
            <button className="controller" onClick={handleToggleExpand}>
              <IconSingleArrow color={'primary'} direction={isExpand ? 'left' : 'right'} />
            </button>
          )}
        </aside>
      </DimLayout>
    </GlobalPortal.Consumer>
  );
}
