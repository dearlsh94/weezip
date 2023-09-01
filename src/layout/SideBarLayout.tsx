import * as React from 'react'
import { ReactNode } from 'react'
import Dim from '@layout/Dim'
import '@scss/layout/SideBarLayout.scss'

interface SideBarLayoutProps {
  children: ReactNode
  handleClose: () => void
}

const SideBarLayout = ({ handleClose, children }: SideBarLayoutProps) => {
  return (
    <>
      <aside className={`sidebar-layout`}>
        <div className="content">{children}</div>
      </aside>
      <Dim handleClose={handleClose} />
    </>
  )
}

export default SideBarLayout
