import React, { memo } from 'react'
import RoomItem from '../room-item'

import SectionRoomsWrapper from './style'

import { IProps } from './types'

const SectionRooms = memo((props: IProps) => {
  const { roomList } = props

  return (
    <SectionRoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} itemData={item} />
      })}
    </SectionRoomsWrapper>
  )
})

export default SectionRooms
