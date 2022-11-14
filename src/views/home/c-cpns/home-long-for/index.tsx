import React, { memo } from 'react'

import HomeLongForWrapper from './style'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/long-for-item'
import ScrollView from '@/base-ui/scroll-view'

import { IProps } from './types'

const HomeLongFor = memo((props: IProps) => {
  const { infoData } = props

  return (
    <HomeLongForWrapper>
      <SectionHeader
        title={infoData.title ?? ''}
        subTitle={infoData.subtitle}
      />

      <div className="long-for-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <LongForItem key={item.city} itemData={item} />
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

export default HomeLongFor
