import React, { memo } from 'react'

import HomeSectionV1Wrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

import { IProps } from './types'

const HomeSectionV1 = memo((props: IProps) => {
  const { infoData } = props

  return (
    <HomeSectionV1Wrapper>
      <SectionHeader
        title={infoData.title ?? ''}
        subTitle={infoData.subtitle}
      />
      <SectionRooms roomList={infoData.areaRoom?.rooms ?? []} />
      <SectionFooter areaName={infoData.areaRoom?.name ?? ''} />
    </HomeSectionV1Wrapper>
  )
})

export default HomeSectionV1
