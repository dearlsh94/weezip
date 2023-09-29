import * as React from 'react';
import { SVGIcon } from '@types';
import SvgBox from './SvgBox';
import '@scss/components/Icon.scss';

// https://icon-sets.iconify.design/gg/menu/
const IconHamburgerMenu = (props: SVGIcon) => {
  return (
    <SvgBox {...props}>
      <path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 5.032a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2H3Z" />
    </SvgBox>
  );
};

export default IconHamburgerMenu;
