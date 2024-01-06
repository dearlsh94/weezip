import * as React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import Linker from '@components/ui/linker';
import { StaticImage } from 'gatsby-plugin-image';
import PostSearchLayer from '@module/PostSearchLayer';
import { IconSearch } from '@components/icon';
import ThemeController from '@components/ThemeController';
import useOverlay from '@src/hooks/useOverlay';
import SNBOpenIcon from '@components/header/snb';
import useScroll from '@src/hooks/useScroll';

export default function Header() {
  const searchOverlay = useOverlay();
  const [status, setStatus] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    setStatus(50 < scrollY && scrollY < document.body.scrollHeight * 0.35 ? 'invisible' : '');
  }, [scrollY]);

  return (
    <>
      <header className={`${status}`}>
        <SNBOpenIcon />
        <Linker url="/" aria-label="홈으로 이동">
          <div className="icon-box">
            <StaticImage src="../../images/Tesseract-Logo-64x64.png" alt="Weezip Logo" className="logo" width={32} />
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
}
