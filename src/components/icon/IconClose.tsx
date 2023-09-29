import * as React from 'react';
import { SVGIcon } from '@types';
import SvgBox from './SvgBox';
import '@scss/components/Icon.scss';

// https://icon-sets.iconify.design/ion/close/
const IconClose = (props: SVGIcon) => {
  return (
    <SvgBox viewBox="0 0 512 512" {...props}>
      <path d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" />
    </SvgBox>
  );
};

export default IconClose;
