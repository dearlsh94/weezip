import * as React from 'react'
import { useEffect, useContext, useState } from 'react'
import { NotionContext } from '@store/rootStore'
import '@scss/module/Header.scss'
import { NotionNode } from '@types'
import { isDebug, GNB_MENUS } from '@src/constants'
import Linker from '@components/ui/Linker'
import { StaticImage } from 'gatsby-plugin-image'
import DimWrapper from '@layout/DimWrapper'
import { throttle } from '@utils/commonUtils'
import PostSearch from '@components/ui/PostSearch'
import {
  IconHamburgerMenu,
  IconHome,
  IconDoubleArrow,
  IconSearch,
  IconOutLink,
  IconList,
  IconStar,
} from '@components/icon'
import ThemeController from '@components/ThemeController'
import { GlobalPortal } from '@components/GlobalPortal'

const Header = () => {
  const nodes: NotionNode[] = useContext(NotionContext).nodes
  const [isSnbOpen, setIsSnbOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [isMenuHover, setIsMenuHover] = useState(false)

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
    const throttledScrollHandler = throttle(scrollHandler, 3)

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
    <>
      <header id="header" className={`${status}`}>
        <div className="left-box">
          <div
            className="icon-box"
            onClick={() => setIsSnbOpen(!isSnbOpen)}
            onMouseOver={() => setIsMenuHover(true)}
            onMouseLeave={() => setIsMenuHover(false)}
            onFocus={() => setIsMenuHover(true)}
            onBlur={() => setIsMenuHover(false)}
          >
            {isMenuHover ? (
              isSnbOpen ? (
                <IconDoubleArrow direction="left" size={28} />
              ) : (
                <IconDoubleArrow direction="right" size={28} />
              )
            ) : (
              <IconHamburgerMenu size={28} />
            )}
          </div>
        </div>
        <Linker url="/">
          <div className="logo-box">
            <StaticImage src={`../images/logo-2x.png`} alt="Weezip Logo" className="logo" />
          </div>
        </Linker>
        <div className="right-box">
          <div className="icon-box">
            <ThemeController />
          </div>
          <PostSearch>
            <div className="icon-box">
              <IconSearch />
            </div>
          </PostSearch>
        </div>
      </header>
      <GlobalPortal.Consumer>
        <aside className={`snb-container ${isSnbOpen ? 'open' : ''}`}>
          <DimWrapper handleClose={() => setIsSnbOpen(false)}>
            <div className="snb-box">
              <div className="sub-header">
                <StaticImage src={`../images/logo-3x.png`} alt="Weezip Logo" className="logo" />
                <div className="text-box">
                  {/* TODO 무슨 문구를 써놓을까 */}
                  <p></p>
                </div>
              </div>
              <nav className="nav-box">
                <ul>
                  {GNB_MENUS?.length > 0 &&
                    GNB_MENUS.map((nav, i) => {
                      return (
                        <li key={`gnb-${i}`} className={`nav-item`}>
                          <Linker url={nav.url} target={nav.isOutLink ? '_blank' : '_parent'}>
                            <div className="title-box">
                              {nav.title.toUpperCase() === 'HOME' && <IconHome />}
                              {nav.title.toUpperCase() === 'LIST' && <IconList />}
                              {nav.title.toUpperCase() === '문화소비자시점' && <IconStar />}
                              {nav.isOutLink && <IconOutLink />}
                              <span>{nav.title}</span>
                            </div>
                          </Linker>
                        </li>
                      )
                    })}
                </ul>
              </nav>
            </div>
          </DimWrapper>
        </aside>
      </GlobalPortal.Consumer>

      {isDebug && (
        <section>
          {nodes.map((node: NotionNode) => {
            return (
              <div key={`node-${node.id}`}>
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
    </>
  )
}

export default Header
