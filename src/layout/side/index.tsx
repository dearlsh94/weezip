import * as React from 'react';
import { ReactNode } from 'react';
import './index.scss';
import { GlobalPortal } from '@components/GlobalPortal';
import DimLayout from '@layout/dim';

interface SideLayoutProps {
  children: ReactNode;
  handleClose?: () => void;
}

const SideLayout = ({ handleClose, children }: SideLayoutProps) => {
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
};

export default SideLayout;
