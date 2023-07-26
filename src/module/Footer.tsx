import * as React from 'react'
import '@scss/module/Footer.scss'
import Linker from '@components/ui/Linker'
import { mail } from '@src/constants'
import { IconMail, CircleIconWrapper, IconInstagram, IconGithub, IconKakao, IconThreads } from '@components/icon'

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="item contact-box">
            <p>Contact Me</p>
            <div className="contact-item">
              <CircleIconWrapper color="white">
                <Linker url={`mailto:${mail}`}>
                  <IconMail size={24} fill="white" />
                </Linker>
              </CircleIconWrapper>
              <CircleIconWrapper color="white">
                <Linker url={`https://www.instagram.com/treefeely/`} target="_blank">
                  <IconInstagram size={24} fill="white" />
                </Linker>
              </CircleIconWrapper>
              <CircleIconWrapper color="white">
                <Linker url={`https://www.threads.net/@moment.______`} target="_blank">
                  <IconThreads size={24} fill="white" />
                </Linker>
              </CircleIconWrapper>
              <CircleIconWrapper color="white">
                <Linker url={`https://open.kakao.com/me/treefeely`} target="_blank">
                  <IconKakao size={24} fill="white" />
                </Linker>
              </CircleIconWrapper>
              <CircleIconWrapper color="white">
                <Linker url={`https://github.com/dearlsh94`} target="_blank">
                  <IconGithub size={24} fill="white" />
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
    </React.Fragment>
  )
}

export default Footer
