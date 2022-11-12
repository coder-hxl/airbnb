import React, { memo } from 'react'

import HomeSectionV2Wrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

import { IProps } from './types'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props: IProps) => {
  const { infoData } = props

  const tabNames = infoData.dest_address?.map((item) => item.name)

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader
        title={infoData.title ?? ''}
        subTitle={infoData.subtitle}
      />
      <SectionTabs tabNames={tabNames ?? []} />
      <SectionRooms
        roomList={infoData.dest_list?.['佛山'] ?? []}
        itemWidt="33.333%"
      />
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2
