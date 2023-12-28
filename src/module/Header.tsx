import * as React from 'react';
import { useEffect, useState } from 'react';
import '@scss/module/Header.scss';
import Linker from '@components/ui/Linker';
import { StaticImage } from 'gatsby-plugin-image';
import PostSearchLayer from '@module/PostSearchLayer';
import { IconSearch } from '@components/icon';
import ThemeController from '@components/ThemeController';
import useOverlay from '@src/hooks/useOverlay';
import SNBOpenIcon from '@components/ui/SNBOpenIcon';
import useScroll from '@src/hooks/useScroll';

const Header = () => {
  const searchOverlay = useOverlay();
  const [status, setStatus] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    setStatus(scrollY > 50 && scrollY < document.body.scrollHeight * 0.35 ? 'invisible' : 'visible');
  }, [scrollY]);

  return (
    <>
      <header className={`${status}`}>
        <SNBOpenIcon />
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
