import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import HeaderWrapper, { HeaderPlaceholderWrapper } from './style'
import Left from './c-cpns/header-left'
import Center from './c-cpns/header-center'
import Right from './c-cpns/header-right'

import { RootState } from '@/store'
import { ThemeProvider } from 'styled-components'
import { useScrollPosition } from '@/hooks'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    (state: RootState) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )
  const { isFixed, topAlpha } = headerConfig

  const [showSearch, setShowSearch] = useState(false)
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)

  const isAlpha = topAlpha && scrollY === 0

  // 根据滚动距离设置是否展示搜索
  if (!showSearch) prevY.current = scrollY
  if (showSearch && Math.abs(scrollY - prevY.current) > 30) setShowSearch(false)

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <Left />
            <Center
              showSearch={isAlpha || showSearch}
              onSearchBoxClick={(showSearch) => setShowSearch(showSearch)}
            />
            <Right />
          </div>
          <HeaderPlaceholderWrapper showSearch={showSearch} />
        </div>

        {!isAlpha && showSearch && (
          <div className="cover" onClick={() => setShowSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
