import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import searchData from '@/assets/data/search_titles.json'

import CenterWrapper from './style'
import IconSearchBar from '@/assets/svg/icon_search_bar'
import SearchTbas from './c-cpns/search-tabs'
import SearchSection from './c-cpns/search-section'

import { IHeaderCenterProps } from './types'

const Center = memo((props: IHeaderCenterProps) => {
  const { showSearch, onSearchBoxClick } = props
  const [tabIndex, setTabIndex] = useState(0)

  const tabs = searchData.map((item) => item.title)
  const sections = searchData.map((item) => item.searchInfos)

  function handleShowSearchClick(showSearch: boolean) {
    onSearchBoxClick(showSearch)
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!showSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
        addEndListener={() => {}}
      >
        <div className="search-bar" onClick={() => handleShowSearchClick(true)}>
          <div className="text">搜索房源和体验</div>
          <div className="icon-serach">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
        addEndListener={() => {}}
      >
        <div className="serach-detail">
          <SearchTbas tabs={tabs} tabIndex={tabIndex} tabClick={setTabIndex} />
          <div className="search-section">
            <SearchSection
              section={sections[tabIndex]}
              onSearchClick={() => handleShowSearchClick(false)}
            />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default Center
