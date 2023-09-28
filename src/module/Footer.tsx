import * as React from 'react'
import '@scss/module/Footer.scss'
import Linker from '@components/ui/Linker'
import { OWNER_EMAIL } from '@src/constants'
import { IconMail, CircleIconWrapper, IconInstagram, IconGithub, IconKakao } from '@components/icon'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="item contact-box">
          <p>Contact Me</p>
          <div className="contact-item">
            <CircleIconWrapper color="reverse-mono">
              <a href={`mailto:${OWNER_EMAIL}`} aria-label={`메일 주소 ${OWNER_EMAIL}`}>
                <IconMail color="reverse-mono" />
              </a>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker url={`https://www.instagram.com/treefeely/`} target="_blank" aria-label="인스타그램 이동">
                <IconInstagram color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker url={`https://open.kakao.com/me/treefeely`} target="_blank" aria-label="오픈 카카오톡 이동">
                <IconKakao color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
            <CircleIconWrapper color="reverse-mono">
              <Linker url={`https://github.com/dearlsh94`} target="_blank" aria-label="Github 이동">
                <IconGithub color="reverse-mono" />
              </Linker>
            </CircleIconWrapper>
          </div>
        </div>
        <div className="item refer-box">
          <span>All Icons by</span>
          <Linker url={`https://icon-sets.iconify.design/`} target={'_blank'}>
            iconiFy
          </Linker>
        </div>
        <div className="item copyright-box">
          <p className="copyright">Copyright 2023. Ethan.lee all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
