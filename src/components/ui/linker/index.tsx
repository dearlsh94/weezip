import * as React from 'react';
import { AnchorHTMLAttributes } from 'react';
import { Link } from 'gatsby';

interface LinkerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children?: React.ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export default function Linker({ url, target, children, ...rest }: LinkerProps) {
  return (
    <>
      {url.startsWith('https://') && !url.startsWith('https://weezip.treefeely.com') ? (
        <a href={url} target={target} rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      ) : (
        <Link to={url} aria-label={rest['aria-label']}>
          {children}
        </Link>
      )}
    </>
  );
}
