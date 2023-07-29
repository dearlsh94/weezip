import * as React from 'react'
import { useLocation } from '@reach/router'
import '@scss/components/FilterItem.scss'
import { Filter } from '@types'
import { navigate } from 'gatsby'
import Linker from './ui/Linker'

interface Props {
  filter: Filter
}

const FilterItem = ({ filter }: Props) => {
  const location = useLocation()
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    if (location.search.includes(`${filter.type}=${encodeURIComponent(filter.key)}`)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [location])

  return (
    <React.Fragment>
      <Linker url={`/list?${filter.type}=${encodeURIComponent(filter.key)}`}>
        <div className={`filter-item ${filter.color} ${isActive ? 'active' : ''}`}>{filter.name}</div>
      </Linker>
    </React.Fragment>
  )
}

export default FilterItem
