import { CircleIconWrapper, IconMoveEnd } from '@components/icon';
import useScroll from '@src/hooks/useScroll';
import React from 'react';
import { useEffect, useState } from 'react';

export default function MoveTopButton() {
  const [status, setStatus] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    setStatus(scrollY < 10 ? 'hidden' : '');
  }, [scrollY]);

  const moveTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`top-button-box ${status}`} onClick={moveTop}>
      <CircleIconWrapper color="secondary" size={44}>
        <IconMoveEnd direction="top" color="primary" />
      </CircleIconWrapper>
    </div>
  );
}
