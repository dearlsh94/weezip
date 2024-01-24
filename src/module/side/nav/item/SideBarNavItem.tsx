import React from 'react';

import { IconHome, IconList, IconOutLink, IconStar } from '@components/icon';
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
      <Linker aria-label={`${title} 이동`} target={isOutLink ? '_blank' : '_parent'} url={url}>
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
