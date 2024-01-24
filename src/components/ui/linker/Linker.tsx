import { Link } from 'gatsby';

import * as React from 'react';
import { AnchorHTMLAttributes } from 'react';


interface LinkerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children?: React.ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export default function Linker({ url, target, children, ...rest }: LinkerProps) {
  return url.startsWith('https://') && !url.startsWith('https://weezip.treefeely.com') ? (
    <a href={url} rel="noopener noreferrer" target={target} {...rest}>
      {children}
    </a>
  ) : (
    <Link aria-label={rest['aria-label']} to={url}>
      {children}
    </Link>
  );
}
