import * as React from 'react'
import '@scss/components/RecommendTag.scss'
import HelpText from '@components/ui/HelpText'
import Linker from '@components/ui/Linker'

interface Props {}

const RecommendTag = ({}: Props) => {
  return (
    <div className="recommend-box">
      <HelpText text={'이런 건 어때요?'} />
      <Linker url={`/list/?series=60`} className="item">
        #문화소비자시점
      </Linker>
      <Linker url={`/list/?tag=Dev`} className="item">
        #Dev
      </Linker>
      <Linker url={`/list/?tag=Essay`} className="item">
        #Essay
      </Linker>
    </div>
  )
}

export default RecommendTag
