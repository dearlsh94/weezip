import * as React from 'react'
import '../scss/components.scss'
import { Property } from '../types'

interface Props {
  tags: Property | undefined
}

const CategoryBadges = ({ tags }: Props) => {
  return (
    <React.Fragment>
      {tags && (
        <div className="badge-box">
          {tags.multi_select?.map((category, i) => {
            return (
              <span className={`badge ${category.color}_background`} key={`category-badge-${i}`}>
                {category.name}
              </span>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default CategoryBadges
