import * as React from 'react'
import '@scss/layout/MainLayout.scss'
import Header from '@module/Header'
import Footer from '@module/Footer'
import ScrollProgress from '@components/ui/ScrollProgress'

interface Props {
  children: React.ReactNode
  className: string
}

const MainLayout = ({ children, className }: Props) => {
  return (
    <React.Fragment>
      <main className={`main-layout ${className}`}>
        <Header />
        <ScrollProgress />
        <article>
          <div className="content">{children}</div>
        </article>
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default MainLayout
