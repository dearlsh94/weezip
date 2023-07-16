import * as React from 'react'
import '@scss/components/RecommendTag.scss'
import HelpText from '@components/ui/HelpText'
import Linker from '@components/ui/Linker'
import { RECOMMEND_TAGS } from '@src/constants'

const RecommendTag = () => {
  return (
    <div className="recommend-box">
      <HelpText text={'이런 건 어때요?'} />
      {RECOMMEND_TAGS.map(tag => (
        <Linker url={tag.url} className="item">
          #{tag.name}
        </Linker>
      ))}
    </div>
  )
}

export default RecommendTag
