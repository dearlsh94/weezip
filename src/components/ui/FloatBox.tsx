import * as React from 'react';
import { useEffect, useState } from 'react';
import '@scss/components/FloatBox.scss';
import { CircleIconWrapper, IconMoveEnd } from '@components/icon';
import useScroll from '@src/hooks/useScroll';

interface Props {
  useTop: boolean;
}

const FloatBox = ({ useTop }: Props) => {
  const [status, setStatus] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    setStatus(scrollY > 0 ? 'scroll' : '');
  }, [scrollY]);

  const moveTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`float-box`}>
      {useTop && (
        <div className={`top-button-box ${status}`} onClick={moveTop}>
          <CircleIconWrapper color="secondary" size={44}>
            <IconMoveEnd direction="top" color="primary" />
          </CircleIconWrapper>
        </div>
      )}
    </div>
  );
};

export default FloatBox;
