import React, { memo, useCallback, useState } from 'react'

import HomeSectionV2Wrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

import { IProps } from './types'

const HomeSectionV2 = memo((props: IProps) => {
  const { infoData } = props

  const [activeIndex, setActiveIndex] = useState(0)
  const tabNames = infoData?.list?.map((area) => area.name) ?? []

  const tabClickHandle = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader
        title={infoData.title ?? ''}
        subTitle={infoData.subtitle}
      />
      <SectionTabs tabNames={tabNames} tabClickHandle={tabClickHandle} />
      <SectionRooms
        roomList={infoData.list?.[activeIndex].rooms ?? []}
        itemWidt="33.333%"
      />
      <SectionFooter
        name={tabNames[activeIndex]}
        areaName={tabNames[activeIndex]}
      />
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2
