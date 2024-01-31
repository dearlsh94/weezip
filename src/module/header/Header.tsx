import { StaticImage } from 'gatsby-plugin-image';

import * as React from 'react';
import { useEffect, useState } from 'react';

import './Header.scss';

import ThemeController from '@components/ThemeController';
import { SNBOpenIcon } from '@components/header';
import { IconSearch } from '@components/icon';
import { Linker } from '@components/ui';
import useScroll from '@hooks/useScroll';
import { ARIA_LABEL } from '@src/constants';
import { useShowSearchStore } from '@store/config';
import { moveToTop } from '@utils/scroll';

export default function Header() {
  const { open: handleOpenSearch } = useShowSearchStore();

  const { scrollY, isScrollingUp, isBottom } = useScroll();
  const [status, setStatus] = useState('');
  const [postTitle, setPostTitle] = useState('');

  useEffect(() => {
    setStatus(scrollY < 160 || isScrollingUp || isBottom ? '' : 'invisible');
  }, [scrollY, isScrollingUp]);

  useEffect(() => {
    const elTitle = document.querySelector<HTMLHeadingElement>('.post-title h1.title');
    setPostTitle(elTitle?.outerText || '');
  }, []);

  return (
    <header className={`${status}`}>
      <div className="left-box">
        <SNBOpenIcon />
      </div>
      <Linker label={`홈으로 ${ARIA_LABEL.MOVE}`} url="/">
        <div className="icon-box">
          <StaticImage alt="Weezip Logo" className="logo" src="../../images/Tesseract-Logo-128x128.png" width={36} />
        </div>
      </Linker>
      {scrollY > 200 && postTitle && (
        <p className="title" onClick={moveToTop}>
          {postTitle}
        </p>
      )}
      <div className="right-box">
        <button className="icon-box">
          <ThemeController />
        </button>
        <button aria-label={`검색창 ${ARIA_LABEL.OPEN}`} className="icon-box" role="button" onClick={handleOpenSearch}>
          <IconSearch />
        </button>
      </div>
    </header>
  );
}
