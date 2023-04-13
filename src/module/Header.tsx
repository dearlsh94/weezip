import * as React from 'react'
import { useEffect, useContext, useState } from 'react'
import { NotionContext } from '../store/rootStore'
import { NotionCategories } from '../types'
import '../scss/module.scss'
import { NotionNode } from '../types'
import { isDebug, gnbLinkes } from '../constants'
import Linker from '../components/Linker'
import { StaticImage } from 'gatsby-plugin-image'
import DimWrapper from '../layout/DimWrapper'
import { throttle } from '../utils/commonUtils'
import IconHamburgerMenu from '../components/icon/IconHamburgerMenu'
import IconHome from '../components/icon/IconHome'

const Header = () => {
  const nodes: NotionNode[] = useContext(NotionContext).nodes
  const categories: NotionCategories = useContext(NotionContext).categories
  const [isSnbOpen, setIsSnbOpen] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        setStatus('sticky')
      } else if (window.scrollY > 0) {
        setStatus('scrolled')
      } else {
        setStatus('')
      }
    }
    const throttledScrollHandler = throttle(scrollHandler)

    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [])

  useEffect(() => {
    if (isSnbOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isSnbOpen])

  return (
    <React.Fragment>
      <header id="header" className={`${status}`}>
        <div className="left-box" onClick={() => setIsSnbOpen(!isSnbOpen)}>
          <IconHamburgerMenu size={28} />
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
                          <div className="title-box">
                            {nav.title.toUpperCase() === 'HOME' && <IconHome />}
                            <span>{nav.title}</span>
                          </div>
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
