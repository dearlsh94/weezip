import * as React from 'react'
import { NotionContext } from '../store/rootStore'
import { NotionNode } from '../types'

const Header = () => {
  const nodes: NotionNode[] = React.useContext(NotionContext)
  return (
    <React.Fragment>
      <header>
        Logo
        {nodes?.length > 0 &&
          nodes.map((nav, i) => {
            return <nav key={`gnb-${i}`}>{nav.title}</nav>
          })}
      </header>
    </React.Fragment>
  )
}

export default Header
