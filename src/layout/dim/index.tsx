import * as React from 'react';
import './index.scss';

interface DimLayoutProps {
  children: React.ReactNode;
  handleClose?: () => void;
}

const DimLayout = ({ children, handleClose }: DimLayoutProps) => {
  return (
    <>
      {children}
      <aside className="dim" onClick={handleClose} />
    </>
  );
};

export default DimLayout;
