import { IconEndArrow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import useScroll from '@src/hooks/useScroll';
import useShow from '@src/hooks/useShow';
import { moveToTop } from '@utils/scroll';
import React from 'react';
import { useEffect } from 'react';

export default function MoveTopButton() {
  const showButton = useShow();
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 10) {
      showButton.show();
    } else {
      showButton.hide();
    }
  }, [scrollY]);

  return (
    <>
      {showButton.isShow && (
        <CircleIconWrapper color="secondary" size={44}>
          <IconEndArrow direction="top" color="primary" onClick={moveToTop} />
        </CircleIconWrapper>
      )}
    </>
  );
}
