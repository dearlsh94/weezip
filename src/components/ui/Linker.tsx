import * as React from 'react';
import { AnchorHTMLAttributes } from 'react';
import '@scss/components/ui/Linker.scss';
import { Link } from 'gatsby';

interface LinkerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children?: React.ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

const Linker = ({ url, target, children, ...rest }: LinkerProps) => {
  return (
    <>
      {url.startsWith('https://') && !url.startsWith('https://weezip.treefeely.com') ? (
        <a href={url} target={target} rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      ) : (
        <Link to={url} {...rest}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Linker;
