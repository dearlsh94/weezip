export interface Filter {
  type: string
  key: string
  name: string
  color: string
}

export interface SVGIcon {
  size: number
  color: 'mono' | 'primary' | 'secondary'
  direction?: 'top' | 'right' | 'left' | 'bottom'
  handleClick?: React.MouseEventHandler<SVGSVGElement>
}
