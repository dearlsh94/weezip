import * as React from 'react'
import '../scss/module.scss'
import Linker from '../components/Linker'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {}

const Footer = ({}: Props) => {
  return (
    <React.Fragment>
      <footer>
        <div className="contact-box center-box">
          <p>Contact Me</p>
          <div className="contact-item">
            mail : <span>dearlsh94@gmail.com</span>
          </div>
        </div>
        <div className="refer-box center-box">
          Icon by Flaticon :
          <Linker url="https://www.flaticon.com/" target="_blank">
            Go
          </Linker>
        </div>
        <div className="copyright-box center-box">
          <p className="copyright">Copyright 2023. Ethan.lee all rights reserved.</p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
