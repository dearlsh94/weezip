import * as React from 'react'
import { useLocation } from '@reach/router'
import '@scss/components/FilterItem.scss'
import { Filter } from '@types'
import { navigate } from 'gatsby'

interface Props {
  filter: Filter
}

const FilterItem = ({ filter }: Props) => {
  const location = useLocation()
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    if (location.search.includes(`${filter.type}=${filter.key}`)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [location])

  const handelFilter = () => {
    navigate(`/list?${filter.type}=${filter.key}`)
  }
  return (
    <React.Fragment>
      <div className={`filter-item ${filter.color} ${isActive ? 'active' : ''}`} onClick={handelFilter}>
        {filter.name}
      </div>
    </React.Fragment>
  )
}

export default FilterItem
