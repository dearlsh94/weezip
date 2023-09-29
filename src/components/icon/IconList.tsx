import * as React from 'react';
import { SVGIcon } from '@types';
import SvgBox from './SvgBox';
import '@scss/components/Icon.scss';

// https://icon-sets.iconify.design/ion/list/
const IconList = (props: SVGIcon) => {
  return (
    <SvgBox viewBox="0 0 512 512" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M160 144h288M160 256h288M160 368h288"
      />
      <circle
        cx="80"
        cy="144"
        r="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="80"
        cy="256"
        r="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="80"
        cy="368"
        r="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </SvgBox>
  );
};

export default IconList;
