import * as React from 'react'
import { useContext } from 'react'
import '../scss/components.scss'
import { CATEGORY_FILTERS, SERIES_FILTERS } from '../constants'
import Divider from './notion/Divider'
import FilterItem from './FilterItem'
import { NotionContext } from '../store/rootStore'
const ListFilter = () => {
  const tags = useContext(NotionContext).tags
  const renderedData: JSX.Element[] = []

  if (tags) {
    tags.forEach((value, key) => {
      renderedData.push(
        <React.Fragment key={`tags-filter-item-${key}`}>
          {key} : {value.length}
        </React.Fragment>
      )
    })
  }

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
        {false && renderedData.length > 0 && (
          <>
            <Divider />
            <div className="tag filter">
              <p className="title">Tag</p>
              {renderedData}
              {/* <div className="filter-box">
            {tags?.forEach((tag, idx) => {
              return (
                <React.Fragment key={`tags-filter-item-${idx}`}>
                  {tag.key}
                </React.Fragment>
              )
            })}
          </div> */}
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default ListFilter
