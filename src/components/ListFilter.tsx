import * as React from 'react'
import { useContext } from 'react'
import '@scss/components/ListFilter.scss'
import { CATEGORY_FILTERS, SERIES_FILTERS } from '@src/constants'
import Divider from '@components/ui/Divider'
import FilterItem from '@components/FilterItem'
import { NotionContext } from '@store/rootStore'
import TagBadges from './TagBadges'

const ListFilter = () => {
  const postTags = useContext(NotionContext).postTags

  return (
    <>
      <div className="list-filter-container">
        <div className="series filter">
          <p className="title">시리즈</p>
          <div className="filter-box">
            {SERIES_FILTERS.map(filter => {
              return (
                <React.Fragment key={`series-filter-item-${filter.key}`}>
                  <FilterItem filter={filter} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <Divider />
        <div className="category filter">
          <p className="title">카테고리</p>
          <div className="filter-box">
            {CATEGORY_FILTERS.map(filter => {
              return (
                <React.Fragment key={`category-filter-item-${filter.key}`}>
                  <FilterItem filter={filter} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <Divider />
        <div className="tag filter">
          <p className="title">태그</p>
          <TagBadges postItemTags={postTags} isLink={true} />
        </div>
      </div>
    </>
  )
}

export default ListFilter
