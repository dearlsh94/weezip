import * as React from 'react'
import '@scss/module.scss'
import Linker from '@components/Linker'
import IconMail from '@components/icon/IconMail'
import CircleIconWrapper from '@components/icon/CircleIconWrapper'
import { mail } from '@src/constants'
import IconInstagram from '@components/icon/IconInstagram'

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
            </div>
          </div>
          <div className="item refer-box">Icon by iconify</div>
          <div className="item copyright-box">
            <p className="copyright">Copyright 2023. Ethan.lee all rights reserved.</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
