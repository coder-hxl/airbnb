import React, { memo } from 'react'
import RoomItem from '../room-item'

import SectionRoomsWrapper from './style'

import { IProps } from './types'

const SectionRooms = memo((props: IProps) => {
  const { roomList, itemWidt = '25%' } = props

  return (
    <SectionRoomsWrapper>
      {roomList.map((item) => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidt} />
      })}
    </SectionRoomsWrapper>
  )
})

export default SectionRooms
