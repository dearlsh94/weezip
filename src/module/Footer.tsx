import * as React from 'react'
import '../scss/module.scss'
import Linker from '../components/Linker'
import IconMail from '../components/icon/IconMail'
import CircleIconWrapper from '../components/icon/CircleIconWrapper'

interface Props {}

const Footer = ({}: Props) => {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="contact-box">
            <p>Contact Me</p>
            <div className="contact-item">
              <CircleIconWrapper color="white">
                <Linker url="mailto:dearlsh94@gmail.com">
                  <IconMail size={24} />
                </Linker>
              </CircleIconWrapper>
            </div>
          </div>
          <div className="refer-box">
            Icon by Flaticon :
            <Linker url="https://www.flaticon.com/" target="_blank">
              Go
            </Linker>
          </div>
          <div className="copyright-box">
            <p className="copyright">Copyright 2023. Ethan.lee all rights reserved.</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
