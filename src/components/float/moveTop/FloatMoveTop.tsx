import React, { useEffect } from 'react';

import { IconEndArrow } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import useScroll from '@hooks/useScroll';
import useShow from '@hooks/useShow';
import { ARIA_LABEL } from '@src/constants';
import { moveToTop } from '@utils/scroll';

export default function FloatMoveTop() {
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
      <CircleIconWrapper
        aria-label={`페이지 최상단으로 ${ARIA_LABEL.MOVE}`}
        color="secondary"
        size={44}
        onClick={moveToTop}
      >
        <IconEndArrow color="primary" direction="top" />
      </CircleIconWrapper>
    )
  );
}
