import { IconHome, IconList, IconOutLink, IconStar } from '@components/icon';
import React from 'react';
import './SideBarNavItem.scss';
import { Linker } from '@components/ui';

interface SideBarNavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  url: string;
  title: string;
  isOutLink?: boolean;
}

export default function SideBarNavItem({ url, title, isOutLink, ...props }: SideBarNavItemProps) {
  return (
    <li className="side-bar-nav-item" {...props}>
      <Linker url={url} target={isOutLink ? '_blank' : '_parent'} aria-label={`${title} 이동`}>
        <div className="title-box">
          {title.toUpperCase() === 'HOME' && <IconHome />}
          {title.toUpperCase() === 'LIST' && <IconList />}
          {title.toUpperCase() === '트리피디아' && <IconStar />}
          {isOutLink && <IconOutLink />}
          <span>{title}</span>
        </div>
      </Linker>
    </li>
  );
}
