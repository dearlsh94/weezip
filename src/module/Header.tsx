import * as React from 'react'
import { NotionContext } from '../store/rootStore'
import '../scss/module.scss'
import { NotionNode } from '../types'
import { urlMap } from '../constants'
import Linker from '../components/Linker'

const Header = () => {
  const nodes: NotionNode[] = React.useContext(NotionContext)
  return (
    <React.Fragment>
      <header>
        {/* <img src="../images/logo.png" alt="logo" /> */}
        <div className="gnb-box">
          {nodes?.length > 0 &&
            nodes.map((nav, i) => {
              return (
                <nav key={`gnb-${i}`} className={`gnb-item`}>
                  <Linker url={nav.title}>{urlMap.get(nav.title)}</Linker>
                </nav>
              )
            })}
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
