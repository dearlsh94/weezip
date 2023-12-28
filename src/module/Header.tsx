import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import '@scss/module/Header.scss';
import Linker from '@components/ui/Linker';
import { StaticImage } from 'gatsby-plugin-image';
import { throttle } from '@utils/commonUtils';
import PostSearchLayer from '@module/PostSearchLayer';
import { IconSearch } from '@components/icon';
import ThemeController from '@components/ThemeController';
import useOverlay from '@src/hooks/useOverlay';
import SNBOpenIcon from '@components/ui/SNBOpenIcon';

const Header = () => {
  const searchOverlay = useOverlay();
  const [status, setStatus] = useState('');

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
      <SNBOpenIcon />
      <header className={`${status}`}>
        <div className="left-box"></div>
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
    </>
  );
};

export default Header;
