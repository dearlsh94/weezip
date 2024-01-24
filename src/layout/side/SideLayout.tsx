import * as React from 'react';
import { ReactNode } from 'react';
import './SideLayout.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import { DimLayout } from '@layout/dim';

interface SideLayoutProps {
  children: ReactNode;
  handleClose?: () => void;
}

export default function SideLayout({ handleClose, children }: SideLayoutProps) {
  return (
    <GlobalPortal.Consumer>
      <DimLayout handleClose={handleClose}>
        <aside className={`side-layout`}>
          <div className="content">{children}</div>
        </aside>
      </DimLayout>
    </GlobalPortal.Consumer>
  );
}
