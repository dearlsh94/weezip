import useOverlay from '@src/hooks/useOverlay';
import React from 'react';
import { useState } from 'react';
import './index.scss';
import SideBarNavigation from '@module/SideBarNavigation';
import { IconDoubleArrow, IconHamburger } from '@components/icon';

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
