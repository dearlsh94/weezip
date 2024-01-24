import * as React from 'react';
import './DimLayout.scss';

interface DimLayoutProps {
  children: React.ReactNode;
  handleClose?: () => void;
}

export default function DimLayout({ children, handleClose }: DimLayoutProps) {
  return (
    <>
      {children}
      {handleClose && <aside className="dim-layout" onClick={handleClose} />}
    </>
  );
}
