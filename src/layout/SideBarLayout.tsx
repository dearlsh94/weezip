import * as React from 'react';
import { ReactNode } from 'react';
import Dim from '@layout/Dim';
import '@scss/layout/SideBarLayout.scss';
import { GlobalPortal } from '@components/GlobalPortal';

interface SideBarLayoutProps {
  children: ReactNode;
  handleClose: () => void;
  useDim?: boolean;
}

const SideBarLayout = ({ handleClose, children, useDim = true }: SideBarLayoutProps) => {
  return (
    <GlobalPortal.Consumer>
      <aside className={`sidebar-layout`}>
        <div className="content">{children}</div>
      </aside>
      {useDim && <Dim handleClose={handleClose} />}
    </GlobalPortal.Consumer>
  );
};

export default SideBarLayout;
