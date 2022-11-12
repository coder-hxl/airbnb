import React, { memo } from 'react'

import HomeSectionV1Wrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

import { IProps } from './types'

const HomeSectionV1 = memo((props: IProps) => {
  const { infoData } = props

  return (
    <HomeSectionV1Wrapper>
      <SectionHeader
        title={infoData.title ?? ''}
        subTitle={infoData.subtitle}
      />
      <SectionRooms roomList={infoData.list ?? []} />
    </HomeSectionV1Wrapper>
  )
})

export default HomeSectionV1
