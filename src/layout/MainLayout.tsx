import * as React from 'react'
import '../scss/layout.scss'
import Header from '../module/Header'
import Footer from '../module/Footer'

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
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default MainLayout
