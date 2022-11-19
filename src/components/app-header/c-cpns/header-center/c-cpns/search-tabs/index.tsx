import React, { memo } from 'react'
import classNames from 'classnames'

import SearchTabsWrapper from './style'

import { ISearchTabsProps } from './types'

const SearchTbas = memo((props: ISearchTabsProps) => {
  const { tabs, tabIndex, tabClick } = props

  return (
    <SearchTabsWrapper>
      {tabs.map((item, index) => {
        return (
          <div
            key={item}
            className={classNames('item', { active: index === tabIndex })}
            onClick={(e) => tabClick(index)}
          >
            {item}
          </div>
        )
      })}
    </SearchTabsWrapper>
  )
})

export default SearchTbas
