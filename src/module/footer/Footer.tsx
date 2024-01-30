import * as React from 'react';

import './Footer.scss';
import { IconGithub, IconKakao, IconMail } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';
import { Linker } from '@components/ui';
import { ARIA_LABEL, OWNER_EMAIL } from '@src/constants';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="item contact-box">
          <p>Contact Me</p>
          <div className="contact-item">
            <CircleIconWrapper color="reverse-mono">
              <Linker label={`${OWNER_EMAIL} 메일 ${ARIA_LABEL.SEND}`} url={`mailto:${OWNER_EMAIL}`}>
                <IconMail color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker
                label={`오픈 카카오톡 ${ARIA_LABEL.OPEN}`}
                target="_blank"
                url={`https://open.kakao.com/me/treefeely`}
              >
                <IconKakao color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker label={`Github ${ARIA_LABEL.OPEN}`} target="_blank" url={`https://github.com/dearlsh94`}>
                <IconGithub color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
          </div>
        </div>
        <div className="item refer-box">
          <span>All Icons by</span>
          <Linker
            label={`iconiFy 웹 사이트로 ${ARIA_LABEL.MOVE}`}
            target={'_blank'}
            url={`https://icon-sets.iconify.design/`}
          >
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
