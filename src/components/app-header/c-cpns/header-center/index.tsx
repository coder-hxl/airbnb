import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import searchData from '@/assets/data/search_titles.json'

import CenterWrapper from './style'
import IconSearchBar from '@/assets/svg/icon_search_bar'
import SearchTbas from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

import { IHeaderCenterProps } from './types'

const Center = memo((props: IHeaderCenterProps) => {
  const { isSearch, onSearchClick } = props

  const tabs = searchData.map((item) => item.title)
  const sections = searchData.map((item) => item.searchInfos)
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
        addEndListener={() => {}}
      >
        <div className="search-bar" onClick={onSearchClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon-serach">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
        addEndListener={() => {}}
      >
        <div className="serach-detail">
          <SearchTbas tabs={tabs} tabIndex={tabIndex} tabClick={setTabIndex} />
          <div className="search-section">
            <SearchSections currentIndex={tabIndex} sections={sections} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default Center
