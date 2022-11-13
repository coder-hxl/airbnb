import React, { memo, useState } from 'react'
import classNames from 'classnames'

import SectionTabsWrapper from './style'

import { IProps } from './types'

const SectionTabs = memo((props: IProps) => {
  const { tabNames, tabClickHandle } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index: number, tabName: string) {
    setCurrentIndex(index)
    tabClickHandle(tabName)
  }

  return (
    <SectionTabsWrapper>
      {tabNames.map((tabName, index) => {
        return (
          <div
            key={tabName}
            className={classNames('item', { active: index === currentIndex })}
            onClick={() => itemClickHandle(index, tabName)}
          >
            {tabName}
          </div>
        )
      })}
    </SectionTabsWrapper>
  )
})

export default SectionTabs
