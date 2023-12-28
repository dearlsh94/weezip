import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import '@scss/module/Header.scss';
import Linker from '@components/ui/Linker';
import { StaticImage } from 'gatsby-plugin-image';
import { throttle } from '@utils/commonUtils';
import PostSearchLayer from '@module/PostSearchLayer';
import { IconHamburgerMenu, IconDoubleArrow, IconSearch } from '@components/icon';
import ThemeController from '@components/ThemeController';
import SideBarNavigation from './SideBarNavigation';
import useOverlay from '@src/hooks/useOverlay';

const Header = () => {
  const SNBOverlay = useOverlay();
  const searchOverlay = useOverlay();

  const [status, setStatus] = useState('');
  const [isMenuHover, setIsMenuHover] = useState(false);

  useLayoutEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        setStatus('sticky');
      } else if (window.scrollY > 0) {
        setStatus('scrolled');
      } else {
        setStatus('');
      }
    };
    const throttledScrollHandler = throttle(scrollHandler, 3);

    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, []);

  return (
    <>
      <header className={`${status}`}>
        <div className="left-box">
          <div
            className="icon-box"
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
        </div>
        <Linker url="/" aria-label="홈으로 이동">
          <div className="icon-box">
            <StaticImage src="../images/Tesseract-Logo-64x64.png" alt="Weezip Logo" className="logo" width={32} />
          </div>
        </Linker>
        <div className="right-box">
          <div className="icon-box">
            <ThemeController />
          </div>
          <div className="icon-box" onClick={searchOverlay.open}>
            <IconSearch />
          </div>
        </div>
      </header>

      {searchOverlay.isOpen && <PostSearchLayer handleClose={searchOverlay.close} />}
      {SNBOverlay.isOpen && <SideBarNavigation handleClose={SNBOverlay.close} />}
    </>
  );
};

export default Header;
