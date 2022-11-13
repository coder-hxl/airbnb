import React, { memo, useCallback, useState } from 'react'

import HomeSectionV2Wrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

import { IProps } from './types'

const HomeSectionV2 = memo((props: IProps) => {
  const { infoData } = props

  const initalName = Object.keys(infoData.dest_list ?? {})[0]
  const [name, setName] = useState(initalName)
  const tabNames = infoData.dest_address?.map((item) => item.name)

  const tabClickHandle = useCallback((tabName: string) => {
    setName(tabName)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader
        title={infoData.title ?? ''}
        subTitle={infoData.subtitle}
      />
      <SectionTabs tabNames={tabNames ?? []} tabClickHandle={tabClickHandle} />
      <SectionRooms
        roomList={infoData.dest_list?.[name] ?? []}
        itemWidt="33.333%"
      />
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2
