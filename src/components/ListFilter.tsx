import * as React from 'react'
import { useContext } from 'react'
import '@scss/components/ListFilter.scss'
import { CATEGORY_FILTERS } from '@src/constants'
import Divider from '@components/ui/Divider'
import { NotionContext } from '@store/rootStore'
import TagBadges from './TagBadges'
import FilterLinker from './FilterLinker'

const ListFilter = () => {
  const { postTags, postSeries } = useContext(NotionContext)

  return (
    <div className="list-filter-container">
      <div className="series filter">
        <p className="title">시리즈</p>
        <div className="filter-box">
          {postSeries?.map(series => {
            return (
              <React.Fragment key={`series-filter-item-${series.name}`}>
                <FilterLinker type="series" name={series.name} color={series.color} />
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
                <FilterLinker type={filter.type} name={filter.name} color={filter.color} />
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
  )
}

export default ListFilter
