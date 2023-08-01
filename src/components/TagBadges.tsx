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
              <span key={`tag-badge-${i}`}>
                <Linker url={`/list?tag=${tag.name}`} isUnderline={true}>
                  <span className={`badge linked`}>#{tag.name}</span>
                </Linker>
              </span>
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
