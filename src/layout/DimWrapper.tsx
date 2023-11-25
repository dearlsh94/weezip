import * as React from 'react';
import '@scss/layout/DimWrapper.scss';

interface DimWrapperProps {
  children: React.ReactNode;
  handleClose?: () => void;
}

const DimWrapper = ({ children, handleClose }: DimWrapperProps) => {
  return (
    <>
      {children}
      <div className="dim" onClick={handleClose} />
    </>
  );
};

export default DimWrapper;
