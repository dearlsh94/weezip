import { Link } from 'gatsby';

import * as React from 'react';
import { AnchorHTMLAttributes } from 'react';

import { HOST_DOMAIN } from '@src/constants';

interface LinkerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  label: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  children?: React.ReactNode;
}

export default function Linker({ url, label, target, children, ...rest }: LinkerProps) {
  return url.startsWith('/') || url.startsWith(`https://${HOST_DOMAIN}`) ? (
    <Link aria-label={label} to={url}>
      {children}
    </Link>
  ) : (
    <a aria-label={label} href={url} rel="noopener noreferrer" target={target} {...rest}>
      {children}
    </a>
  );
}
