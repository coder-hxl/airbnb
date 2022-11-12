import React, { memo } from 'react'

import SectionTabsWrapper from './style'

import { IProps } from './types'

const SectionTabs = memo((props: IProps) => {
  const { tabNames } = props

  return (
    <SectionTabsWrapper>
      {tabNames.map((item, index) => {
        return <div className="item">{item}</div>
      })}
    </SectionTabsWrapper>
  )
})

export default SectionTabs
