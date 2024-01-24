import * as React from 'react';

import './Footer.scss';
import { IconGithub, IconInstagram, IconKakao, IconMail } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { Linker } from '@components/ui';
import { OWNER_EMAIL } from '@src/constants';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="item contact-box">
          <p>Contact Me</p>
          <div className="contact-item">
            <CircleIconWrapper color="reverse-mono">
              <a aria-label={`메일 주소 ${OWNER_EMAIL}`} href={`mailto:${OWNER_EMAIL}`}>
                <IconMail color="reverse-mono" />
              </a>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker aria-label="인스타그램 이동" target="_blank" url={`https://www.instagram.com/treefeely/`}>
                <IconInstagram color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker aria-label="오픈 카카오톡 이동" target="_blank" url={`https://open.kakao.com/me/treefeely`}>
                <IconKakao color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker aria-label="Github 이동" target="_blank" url={`https://github.com/dearlsh94`}>
                <IconGithub color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
          </div>
        </div>
        <div className="item refer-box">
          <span>All Icons by</span>
          <Linker target={'_blank'} url={`https://icon-sets.iconify.design/`}>
            iconiFy
          </Linker>
        </div>
        <div className="item copyright-box">
          <p className="copyright">Copyright 2023. Ethan.lee all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
