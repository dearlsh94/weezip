import { CircleIconWrapper, IconEndArrow } from '@components/icon';
import useScroll from '@src/hooks/useScroll';
import { moveToTop } from '@utils/scroll';
import React from 'react';
import { useEffect, useState } from 'react';

export default function MoveTopButton() {
  const [status, setStatus] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    setStatus(scrollY < 10 ? 'hidden' : '');
  }, [scrollY]);

  return (
    <div className={`top-button-box ${status}`} onClick={moveToTop}>
      <CircleIconWrapper color="secondary" size={44}>
        <IconEndArrow direction="top" color="primary" />
      </CircleIconWrapper>
    </div>
  );
}
