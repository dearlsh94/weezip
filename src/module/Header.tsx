import * as React from 'react'
import { NotionContext } from '../store/rootStore'
import '../scss/module.scss'
import { NotionNode } from '../types'
import { isDebug, urlMap, gnbLinkes } from '../constants'
import Linker from '../components/Linker'
import { StaticImage } from 'gatsby-plugin-image'
import DimWrapper from '../layout/DimWrapper'

const Header = () => {
  const nodes: NotionNode[] = React.useContext(NotionContext)
  const [isSnbOpen, setIsSnbOpen] = React.useState(false)
  return (
    <React.Fragment>
      <header>
        <div className="left-box" onClick={() => setIsSnbOpen(!isSnbOpen)}>
          <StaticImage src="../images/icon-hamburger.svg" alt="icon hamburger menu" className="icon hamburger" />
        </div>
        <Linker url="/">
          <div className="logo-box">
            <StaticImage src={`../images/logo-2x.png`} alt="WeeZip Logo" className="logo" />
          </div>
        </Linker>
      </header>
      <div className={`snb-container ${isSnbOpen ? 'open' : ''}`}>
        <DimWrapper handleClose={() => setIsSnbOpen(false)}>
          <div className="snb-box">
            <div className="introduce-box">
              <StaticImage src={`../images/logo-3x.png`} alt="WeeZip Logo" className="logo" />
              <p>Welcome to WeeZip</p>
            </div>
            <div className="nav-box">
              {gnbLinkes?.length > 0 &&
                gnbLinkes.map((nav, i) => {
                  return (
                    <nav key={`gnb-${i}`} className={`nav-item`}>
                      <Linker url={nav.url}>{nav.title}</Linker>
                    </nav>
                  )
                })}
            </div>
          </div>
        </DimWrapper>
      </div>

      {isDebug && (
        <section>
          {nodes.map((node: NotionNode, i: number) => {
            return (
              <div key={`node-${i}`}>
                <a href={`${node.title || location.pathname}`}>
                  <p>
                    <span>id: {node.id}</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span>title: {node.title}</span>
                  </p>
                </a>
              </div>
            )
          })}
        </section>
      )}
    </React.Fragment>
  )
}

export default Header
