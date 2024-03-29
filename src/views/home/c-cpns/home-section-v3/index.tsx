import React, { memo } from 'react'

import HomeSectionV3Wrapper from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'

import { IProps } from './types'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props: IProps) => {
  const { infoData } = props

  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />

      <div className="plus-list">
        <ScrollView showShade={false}>
          {infoData.areaRoom.rooms.map((item) => {
            return <RoomItem key={item.id} itemData={item} itemWidth="20%" />
          })}
        </ScrollView>
      </div>

      <SectionFooter
        name="plus"
        areaName={infoData.areaRoom.name}
        type={infoData.type}
      />
    </HomeSectionV3Wrapper>
  )
})

export default HomeSectionV3
