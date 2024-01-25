import * as React from 'react';

import './SideBarNavigation.scss';
import { SideLayout } from '@layout/side';
import { GNB_MENUS } from '@src/constants';

import { SideBarNavItem } from './item';

interface SideBarNavigationProps {
  handleClose: () => void;
}

export default function SideBarNavigation({ handleClose }: SideBarNavigationProps) {
  return (
    <SideLayout handleClose={handleClose}>
      <nav className="side-bar-nav">
        {GNB_MENUS?.length > 0 && (
          <ul>
            {GNB_MENUS.map((nav, i) => {
              return (
                <SideBarNavItem
                  key={`side-bar-nav-item-${nav.url}`}
                  {...nav}
                  aria-label={`${nav.title} 메뉴로 이동하기`}
                  onClick={handleClose}
                />
              );
            })}
          </ul>
        )}
      </nav>
    </SideLayout>
  );
}
