import * as React from 'react'
import '../scss/components.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => {
  return (
    <React.Fragment>
      <div className="logo">
        <StaticImage src="../images/logo-word.png" alt="WeeZip Logo" className="logo-word" />
      </div>
    </React.Fragment>
  )
}

export default Logo
