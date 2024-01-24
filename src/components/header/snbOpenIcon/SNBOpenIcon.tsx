import React, { useState } from 'react';

import './SNBOpenIcon.scss';
import { IconDoubleArrow, IconHamburger } from '@components/icon';
import useOverlay from '@hooks/useOverlay';
import { SideBarNavigation } from '@module/side';

export default function SNBOpenIcon() {
  const SNBOverlay = useOverlay();
  const [isMenuHover, setIsMenuHover] = useState(false);

  return (
    <>
      <button
        className="snb-open-icon"
        onClick={SNBOverlay.change}
        onMouseOver={() => setIsMenuHover(true)}
        onMouseLeave={() => setIsMenuHover(false)}
        onFocus={() => setIsMenuHover(true)}
        onBlur={() => setIsMenuHover(false)}
      >
        {isMenuHover ? (
          <IconDoubleArrow direction={SNBOverlay.isOpen ? 'left' : 'right'} size={28} />
        ) : (
          <IconHamburger size={28} />
        )}
      </button>
      {SNBOverlay.isOpen && <SideBarNavigation handleClose={SNBOverlay.close} />}
    </>
  );
}
