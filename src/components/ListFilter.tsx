import * as React from 'react'
import { useContext } from 'react'
import '@scss/components/ListFilter.scss'
import '@scss/components/BadgeBox.scss'
import { CATEGORY_FILTERS, SERIES_FILTERS } from '@src/constants'
import Divider from '@components/notion/Divider'
import FilterItem from '@components/FilterItem'
import { NotionContext } from '@store/rootStore'

const ListFilter = () => {
  const tags = useContext(NotionContext).tags
  const renderTags: JSX.Element[] = []

  if (tags) {
    tags.forEach((value, key) => {
      const [name, color] = key.split('|')
      renderTags.push(
        <React.Fragment key={`tags-filter-item-${key}`}>
          <FilterItem
            filter={{
              type: 'tag',
              key: name,
              name,
              color: `${color}_background`,
            }}
          />
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
        {renderTags.length > 0 && (
          <>
            <Divider />
            <div className="tag filter">
              <p className="title">Tag</p>
              <div className="badge-box">{renderTags}</div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default ListFilter
