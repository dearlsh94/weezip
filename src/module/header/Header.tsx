import { StaticImage } from 'gatsby-plugin-image';

import * as React from 'react';
import { useEffect, useState } from 'react';

import './Header.scss';

import ThemeController from '@components/ThemeController';
import { SNBOpenIcon } from '@components/header';
import { IconSearch } from '@components/icon';
import { PostSearchLayer } from '@components/search';
import { Linker } from '@components/ui';
import useOverlay from '@hooks/useOverlay';
import useScroll from '@hooks/useScroll';

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
        <Linker aria-label="홈으로 이동" url="/">
          <div className="icon-box">
            <StaticImage alt="Weezip Logo" className="logo" src="../../images/Tesseract-Logo-64x64.png" width={32} />
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
