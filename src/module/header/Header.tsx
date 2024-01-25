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
  const { scrollY, isScrollingUp } = useScroll();
  const [postTitle, setPostTitle] = useState('');

  useEffect(() => {
    setStatus(scrollY < 160 || isScrollingUp ? '' : 'invisible');
  }, [scrollY, isScrollingUp]);

  useEffect(() => {
    const elTitle = document.querySelector<HTMLHeadingElement>('.post-title h1.title');
    setPostTitle(elTitle?.outerText || '');
  }, []);

  return (
    <>
      <header className={`${status}`}>
        <SNBOpenIcon />
        <Linker label="홈으로 이동" url="/">
          <div className="icon-box">
            <StaticImage alt="Weezip Logo" className="logo" src="../../images/Tesseract-Logo-64x64.png" width={32} />
          </div>
        </Linker>
        {scrollY > 200 && postTitle && <p className="post-title">{postTitle}</p>}
        <div className="right-box">
          <div className="icon-box">
            <ThemeController />
          </div>
          <div aria-label="검색창 열기" className="icon-box" role="button" onClick={searchOverlay.open}>
            <IconSearch />
          </div>
        </div>
      </header>
      {searchOverlay.isOpen && <PostSearchLayer handleClose={searchOverlay.close} />}
    </>
  );
}
