import * as React from 'react';
import { SVGIcon } from '@types';
import SvgBox from './SvgBox';
import '@scss/components/Icon.scss';

// https://icon-sets.iconify.design/icon-park-solid/caution/
const IconCaution = (props: SVGIcon) => {
  return (
    <SvgBox {...props} viewBox="0 0 48 48">
      <defs>
        <mask id="ipSCaution0">
          <g fill="none" stroke-width="4">
            <path
              fill={props.color}
              fill-rule="evenodd"
              stroke={props.color}
              stroke-linejoin="round"
              d="M24 5L2 43h44L24 5Z"
              clip-rule="evenodd"
            />
            <path stroke="#000" stroke-linecap="round" d="M24 35v1m0-17l.008 10" />
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCaution0)" />
    </SvgBox>
  );
};

export default IconCaution;
