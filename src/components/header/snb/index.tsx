import { IconDoubleArrow, IconHamburgerMenu } from '@components/icon';
import useOverlay from '@src/hooks/useOverlay';
import React from 'react';
import { useState } from 'react';
import './index.scss';
import SideBarNavigation from '@module/SideBarNavigation';

export default function SNBOpenIcon() {
  const SNBOverlay = useOverlay();
  const [isMenuHover, setIsMenuHover] = useState(false);

  return (
    <>
      <div
        className="snb-open-icon"
        onClick={SNBOverlay.change}
        onMouseOver={() => setIsMenuHover(true)}
        onMouseLeave={() => setIsMenuHover(false)}
        onFocus={() => setIsMenuHover(true)}
        onBlur={() => setIsMenuHover(false)}
      >
        {isMenuHover ? (
          SNBOverlay.isOpen ? (
            <IconDoubleArrow direction="left" size={28} />
          ) : (
            <IconDoubleArrow direction="right" size={28} />
          )
        ) : (
          <IconHamburgerMenu size={28} />
        )}
      </div>
      {SNBOverlay.isOpen && <SideBarNavigation handleClose={SNBOverlay.close} />}
    </>
  );
}
