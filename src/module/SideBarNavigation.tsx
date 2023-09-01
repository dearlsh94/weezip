import * as React from 'react'
import { useContext } from 'react'
import '@scss/module/SideBarNavigation.scss'
import { NotionContext } from '@store/rootStore'
import { GlobalPortal } from '@components/GlobalPortal'
import SideBarLayout from '@layout/SideBarLayout'
import { StaticImage } from 'gatsby-plugin-image'
import { isDebug, GNB_MENUS } from '@src/constants'
import Linker from '@components/ui/Linker'
import { IconHome, IconOutLink, IconList, IconStar } from '@components/icon'
import { NotionNode } from '@types'

interface SideBarNavigationProps {
  handleClose: () => void
}

const SideBarNavigation = ({ handleClose }: SideBarNavigationProps) => {
  const nodes: NotionNode[] = useContext(NotionContext).nodes

  return (
    <GlobalPortal.Consumer>
      <SideBarLayout handleClose={handleClose}>
        <div className="snb-header">
          <StaticImage src={`../images/logo-3x.png`} alt="Weezip Logo" className="logo" />
          <div className="text-box">
            {/* TODO 무슨 문구를 써놓을까 */}
            <p></p>
          </div>
        </div>
        <nav className="snb-box">
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
      </SideBarLayout>
    </GlobalPortal.Consumer>
  )
}

export default SideBarNavigation
