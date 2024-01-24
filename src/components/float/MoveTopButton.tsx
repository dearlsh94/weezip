import React, { useEffect } from 'react';

import { IconEndArrow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import useScroll from '@hooks/useScroll';
import useShow from '@hooks/useShow';
import { moveToTop } from '@utils/scroll';

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
    showButton.isShow && (
      <CircleIconWrapper color="secondary" size={44} onClick={moveToTop}>
        <IconEndArrow color="primary" direction="top" />
      </CircleIconWrapper>
    )
  );
}
