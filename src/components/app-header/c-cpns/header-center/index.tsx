import React, { memo } from 'react'

import CenterWrapper from './style'
import IconSearchBar from '@/assets/svg/icon_search_bar'

const Center = memo(() => {
  return (
    <CenterWrapper>
      <div className="text">搜索房源和体验</div>
      <div className="icon-serach">
        <IconSearchBar />
      </div>
    </CenterWrapper>
  )
})

export default Center
