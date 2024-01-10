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
  const render = () => <div className="content">{children}</div>;
  return (
    <GlobalPortal.Consumer>
      {handleClose ? (
        <DimLayout handleClose={handleClose}>
          <aside className={`side-layout dim`}>{render()}</aside>
        </DimLayout>
      ) : (
        <aside className={`side-layout`}>{render()}</aside>
      )}
    </GlobalPortal.Consumer>
  );
}
