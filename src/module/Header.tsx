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
import IconHamburgerMenu from '@components/icon/IconHamburgerMenu'
import IconHome from '@components/icon/IconHome'
import { mail } from '@src/constants'
import IconDoubleArrow from '@components/icon/IconDoubleArrow'
import IconSearch from '@components/icon/IconSearch'
import PostSearch from '@components/ui/PostSearch'

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
    <React.Fragment>
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
          <PostSearch>
            <div className="icon-box">
              <IconSearch />
            </div>
          </PostSearch>
        </div>
      </header>
      <aside className={`snb-container ${isSnbOpen ? 'open' : ''}`}>
        <DimWrapper handleClose={() => setIsSnbOpen(false)}>
          <div className="snb-box">
            <div className="sub-header">
              <StaticImage src={`../images/logo-3x.png`} alt="Weezip Logo" className="logo" />
              <div className="text-box">
                <p>디자인 관련 도움을 구하고 있어요.</p>
                <p>
                  관심 있으시면 <a href={`mailto:${mail}`}>여기</a>로 연락 주세요 🙇‍♂️
                </p>
              </div>
            </div>
            <nav className="nav-box">
              <ul>
                {GNB_MENUS?.length > 0 &&
                  GNB_MENUS.map((nav, i) => {
                    return (
                      <li key={`gnb-${i}`} className={`nav-item`}>
                        <Linker url={nav.url}>
                          <div className="title-box">
                            {nav.title.toUpperCase() === 'HOME' && <IconHome />}
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
