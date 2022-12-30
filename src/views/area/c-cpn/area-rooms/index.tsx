import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { RootState } from '@/store'

import AreaRoomsWrapper from './style'
import RoomItem from '@/components/room-item'

const AreaRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state: RootState) => ({
      roomList: state.area.roomList,
      totalCount: state.area.totalCount,
      isLoading: state.area.isLoading
    }),
    shallowEqual
  )

  return (
    <AreaRoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item) => {
          return <RoomItem key={item.id} itemData={item} itemWidth="20%" />
        })}
      </div>

      {isLoading && <div className="shade"></div>}
    </AreaRoomsWrapper>
  )
})

export default AreaRooms
