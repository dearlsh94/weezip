import * as React from 'react'
import { useEffect, useContext, useState } from 'react'
import { NotionCategories, NotionContext } from '../store/rootStore'
import '../scss/module.scss'
import { NotionNode } from '../types'
import { isDebug, gnbLinkes } from '../constants'
import Linker from '../components/Linker'
import { StaticImage } from 'gatsby-plugin-image'
import DimWrapper from '../layout/DimWrapper'

const Header = () => {
  const nodes: NotionNode[] = useContext(NotionContext).nodes
  const categories: NotionCategories = useContext(NotionContext).categories
  const [isSnbOpen, setIsSnbOpen] = useState(false)

  useEffect(() => {
    if (isSnbOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isSnbOpen])
  return (
    <React.Fragment>
      <header id="header">
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
            <nav className="nav-box">
              <ul>
                {gnbLinkes?.length > 0 &&
                  gnbLinkes.map((nav, i) => {
                    return (
                      <li key={`gnb-${i}`} className={`nav-item`}>
                        <Linker url={nav.url}>
                          <span>{nav.title}</span>
                          {nav.url.includes('/list') && (
                            <div className="count">{categories[nav.title.toLowerCase()]?.length || 0}</div>
                          )}
                        </Linker>
                      </li>
                    )
                  })}
              </ul>
            </nav>
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
