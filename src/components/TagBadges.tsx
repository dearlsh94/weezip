import * as React from 'react'
import '@scss/components/TagBadge.scss'
import { Property, Select } from '@types'

interface Props {
  postItemTags?: Select[]
}

const TagBadges = ({ postItemTags }: Props) => {
  return (
    <React.Fragment>
      {postItemTags && (
        <div className="badge-box">
          {postItemTags.map((t, i) => {
            return (
              <span className={`badge ${t.color}-border`} key={`t-badge-${i}`}>
                #{t.name}
              </span>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default TagBadges
