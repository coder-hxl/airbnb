import React, { memo, useState } from 'react'
import classNames from 'classnames'

import SectionTabsWrapper from './style'

import { IProps } from './types'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props: IProps) => {
  const { tabNames, tabClickHandle } = props

  const [activeIndex, setActiveIndex] = useState(0)

  function itemClickHandle(index: number) {
    setActiveIndex(index)
    tabClickHandle(index)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((tabName, index) => {
          return (
            <div
              key={tabName}
              className={classNames('item', { active: index === activeIndex })}
              onClick={() => itemClickHandle(index)}
            >
              {tabName}
            </div>
          )
        })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

export default SectionTabs
