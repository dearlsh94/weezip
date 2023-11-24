import * as React from 'react';
import '@scss/layout/DimWrapper.scss';

interface Props {
  children: React.ReactNode;
  handleClose?: Function;
}

const DimWrapper = ({ children, handleClose }: Props) => {
  const handleDimClick = () => {
    handleClose && handleClose();
  };
  return (
    <>
      {children}
      <div className="dim" onClick={handleDimClick} />
    </>
  );
};

export default DimWrapper;
