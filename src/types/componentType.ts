export interface Filter {
  type: string;
  key: string;
  name: string;
  color: string;
}

export interface SVGIcon {
  size?: number;
  color?: 'mono' | 'reverse-mono' | 'base' | 'primary' | 'secondary' | 'black' | 'white';
  direction?: 'top' | 'right' | 'left' | 'bottom';
  handleClick?: React.MouseEventHandler<SVGSVGElement>;
}
