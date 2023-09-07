import * as React from 'react'
import { useContext } from 'react'
import '@scss/components/ListFilter.scss'
import { CATEGORY_FILTERS } from '@src/constants'
import Divider from '@components/ui/Divider'
import FilterItem from '@components/FilterItem'
import { NotionContext } from '@store/rootStore'
import TagBadges from './TagBadges'

const ListFilter = () => {
  const { postTags, postSeries } = useContext(NotionContext)

  return (
    <>
      <div className="list-filter-container">
        <div className="series filter">
          <p className="title">시리즈</p>
          <div className="filter-box">
            {postSeries?.map(series => {
              return (
                <React.Fragment key={`series-filter-item-${series.name}`}>
                  <FilterItem select={series} type="series" />
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
          <TagBadges tagNames={postTags} isLink={true} />
        </div>
      </div>
    </>
  )
}

export default ListFilter
