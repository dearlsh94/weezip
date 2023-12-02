import * as React from 'react';
import { ReactNode } from 'react';
import '@scss/layout/SideBarLayout.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import DimWrapper from './DimWrapper';

interface SideBarLayoutProps {
  children: ReactNode;
  handleClose?: () => void;
}

const SideBarLayout = ({ handleClose, children }: SideBarLayoutProps) => {
  return (
    <>
      {handleClose ? (
        <DimWrapper handleClose={handleClose}>
          <GlobalPortal.Consumer>
            <aside className={`sidebar-layout dim`}>
              <div className="content">{children}</div>
            </aside>
          </GlobalPortal.Consumer>
        </DimWrapper>
      ) : (
        <GlobalPortal.Consumer>
          <aside className={`sidebar-layout`}>
            <div className="content">{children}</div>
          </aside>
        </GlobalPortal.Consumer>
      )}
    </>
  );
};

export default SideBarLayout;
