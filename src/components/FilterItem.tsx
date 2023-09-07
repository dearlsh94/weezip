import * as React from 'react'
import { useLocation } from '@reach/router'
import '@scss/components/FilterItem.scss'
import { Filter, Select } from '@types'
import Linker from './ui/Linker'

interface Props {
  filter?: Filter
  select?: Select
  type?: 'series'
}

const FilterItem = ({ filter, select, type }: Props) => {
  const location = useLocation()
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    if (filter) {
      if (location.search.includes(`${filter.type}=${encodeURIComponent(filter.key)}`)) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    if (select) {
      if (location.search.includes(`${type}=${encodeURIComponent(select.name)}`)) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  }, [location])

  return (
    <>
      {select ? (
        <Linker url={`/list?${type}=${encodeURIComponent(select.name)}`}>
          <div className={`filter-item ${select.color}-border ${isActive ? 'active' : ''}`}>{select.name}</div>
        </Linker>
      ) : filter ? (
        <Linker url={`/list?${filter.type}=${encodeURIComponent(filter.key)}`}>
          <div className={`filter-item ${filter.color} ${isActive ? 'active' : ''}`}>{filter.name}</div>
        </Linker>
      ) : (
        <></>
      )}
    </>
  )
}

export default FilterItem
