import * as React from 'react'
import '@scss/components/FilterLinker.scss'
import Linker from './ui/Linker'

interface FilterLinkerProps {
  type: string
  name: string
  color?: string
}

const FilterLinker = ({ type, name, color }: FilterLinkerProps) => {
  return (
    <Linker url={`/list?${type}=${encodeURIComponent(name)}`}>
      <div className={`filter-item ${color}-border`}>{name}</div>
    </Linker>
  )
}

export default FilterLinker
