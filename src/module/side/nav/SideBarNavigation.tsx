import * as React from 'react';

import './SideBarNavigation.scss';
import { SideLayout } from '@layout/side';
import { GNB_MENUS, ARIA_LABEL } from '@src/constants';
import { useShowSNBStore } from '@store/config';

import { SideBarNavItem } from './item';

export default function SideBarNavigation() {
  const { isShow, close: handleSNBClose } = useShowSNBStore();

  return (
    isShow && (
      <SideLayout handleClose={handleSNBClose}>
        <nav className="side-bar-nav">
          {GNB_MENUS?.length && (
            <ul>
              {GNB_MENUS.map(nav => {
                return (
                  <SideBarNavItem
                    key={`side-bar-nav-item-${nav.url}`}
                    {...nav}
                    aria-label={`${nav.title} 메뉴로 ${ARIA_LABEL.MOVE}`}
                    onClick={handleSNBClose}
                  />
                );
              })}
            </ul>
          )}
        </nav>
      </SideLayout>
    )
  );
}
