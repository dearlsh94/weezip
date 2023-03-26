import * as React from 'react'
import '../scss/layout.scss'
import Header from '../module/Header'
import { NotionContext } from '../store/rootStore'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <div className="main-layout">
        <Header />
        <main>
          <div className="content">{children}</div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default MainLayout
