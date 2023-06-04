import * as React from 'react'
import '@scss/module/HeaderIndex.scss'
import HeaderIndexList from '@components/HeaderIndexList'
import IconArrow from '@components/icon/IconArrow'

interface Props {
  list: HTMLHeadingElement[]
}

const HeaderIndex = ({ list }: Props) => {
  const [isShowIndex, setIsShowIndex] = React.useState(false)

  const handleShowIndex = () => {
    setIsShowIndex(!isShowIndex)
  }
  return (
    <React.Fragment>
      <div className="index-box">
        <div className="title-box" onClick={handleShowIndex}>
          <p>목차</p>
          {/* <p>목차 {isShowIndex ? '숨기기' : '보기'}</p> */}
          {/* <div className={`icon-box ${isShowIndex ? 'open' : ''}`}>
            <IconArrow direction={'top'} size={20} />
          </div> */}
        </div>
        {list && list?.length > 0 && <HeaderIndexList list={list} />}
      </div>
    </React.Fragment>
  )
}

export default HeaderIndex
