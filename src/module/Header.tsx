import * as React from 'react'
import { NotionContext } from '../store/rootStore'
import '../scss/module.scss'
import { NotionNode } from '../types'
import { isDebug, urlMap } from '../constants'
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
