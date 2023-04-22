import * as React from 'react'
import '../scss/components.scss'
import { CATEGORY_FILTERS, SERIES_FILTERS } from '../constants'
import Divider from './notion/Divider'
import FilterItem from './FilterItem'

const ListFilter = () => {
  return (
    <React.Fragment>
      <div className="list-filter-container">
        <div className="series filter">
          <p className="title">Series</p>
          <div className="filter-box">
            {SERIES_FILTERS.map((filter, idx) => {
              return (
                <React.Fragment key={`series-filter-item-${idx}`}>
                  <FilterItem filter={filter} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <Divider />
        <div className="category filter">
          <p className="title">Category</p>
          <div className="filter-box">
            {CATEGORY_FILTERS.map((filter, idx) => {
              return (
                <React.Fragment key={`category-filter-item-${idx}`}>
                  <FilterItem filter={filter} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ListFilter
