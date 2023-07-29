import * as React from 'react'
import '@scss/components/TagBadge.scss'
import { Select } from '@types'
import Linker from './ui/Linker'

interface Props {
  postItemTags?: Select[]
  isLink?: boolean
}

const TagBadges = ({ postItemTags, isLink = true }: Props) => {
  return (
    <React.Fragment>
      {postItemTags && (
        <div className="badge-box">
          {postItemTags.map((tag, i) =>
            isLink ? (
              <Linker url={`/list?tag=${tag.name}`} key={`tag-badge-${i}`}>
                <span className={`badge linked`}>#{tag.name}</span>
              </Linker>
            ) : (
              <span className={`badge`} key={`tag-badge-${i}`}>
                #{tag.name}
              </span>
            )
          )}
        </div>
      )}
    </React.Fragment>
  )
}

export default TagBadges
