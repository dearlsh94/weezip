import * as React from 'react';
import { useContext } from 'react';
import '@scss/module/SideBarNavigation.scss';
import { NotionContext } from '@store/rootStore';
import SideLayout from '@layout/side';
import { isDebug, GNB_MENUS } from '@src/constants';
import Linker from '@components/ui/linker';
import { IconHome, IconOutLink, IconList, IconStar } from '@components/icon';
import { NotionNode } from '@types';

interface SideBarNavigationProps {
  handleClose: () => void;
}

const SideBarNavigation = ({ handleClose }: SideBarNavigationProps) => {
  const nodes: NotionNode[] = useContext(NotionContext).nodes;

  return (
    <SideLayout handleClose={handleClose}>
      <nav className="snb-box">
        <ul>
          {GNB_MENUS?.length > 0 &&
            GNB_MENUS.map((nav, i) => {
              return (
                <li key={`gnb-${i}`} className={`nav-item`} onClick={handleClose}>
                  <Linker url={nav.url} target={nav.isOutLink ? '_blank' : '_parent'} aria-label={`${nav.title} 이동`}>
                    <div className="title-box">
                      {nav.title.toUpperCase() === 'HOME' && <IconHome />}
                      {nav.title.toUpperCase() === 'LIST' && <IconList />}
                      {nav.title.toUpperCase() === '트리피디아' && <IconStar />}
                      {nav.isOutLink && <IconOutLink />}
                      <span>{nav.title}</span>
                    </div>
                  </Linker>
                </li>
              );
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
            );
          })}
        </section>
      )}
    </SideLayout>
  );
};

export default SideBarNavigation;
