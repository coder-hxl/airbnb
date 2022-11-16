import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { RootState } from '@/store'

import EntireRoomsWrapper from './style'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state: RootState) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  )

  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item) => {
          return <RoomItem key={item._id} itemData={item} itemWidth="20%" />
        })}
      </div>

      {isLoading && <div className="shade"></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms
