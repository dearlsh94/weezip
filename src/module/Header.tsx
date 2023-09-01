import * as React from 'react'
import { useEffect, useState } from 'react'
import '@scss/module/Header.scss'
import Linker from '@components/ui/Linker'
import { StaticImage } from 'gatsby-plugin-image'
import { throttle } from '@utils/commonUtils'
import PostSearchLayer from '@module/PostSearchLayer'
import { IconHamburgerMenu, IconDoubleArrow, IconSearch } from '@components/icon'
import ThemeController from '@components/ThemeController'
import SideBarNavigation from './SideBarNavigation'
import useOverlay from '@src/hooks/useOverlay'

const Header = () => {
  const overlaySNB = useOverlay()
  const overlaySearch = useOverlay()
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

  return (
    <>
      <header id="header" className={`${status}`}>
        <div className="left-box">
          <div
            className="icon-box"
            onClick={overlaySNB.isOpen ? overlaySNB.close : overlaySNB.open}
            onMouseOver={() => setIsMenuHover(true)}
            onMouseLeave={() => setIsMenuHover(false)}
            onFocus={() => setIsMenuHover(true)}
            onBlur={() => setIsMenuHover(false)}
          >
            {isMenuHover ? (
              overlaySNB.isOpen ? (
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
          <div className="icon-box" onClick={overlaySearch.open}>
            <IconSearch />
          </div>
        </div>
      </header>

      {overlaySearch.isOpen && <PostSearchLayer handleClose={overlaySearch.close} />}
      {overlaySNB.isOpen && <SideBarNavigation handleClose={overlaySNB.close} />}
    </>
  )
}

export default Header
