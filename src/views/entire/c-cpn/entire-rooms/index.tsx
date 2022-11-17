import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '@/store'
import { changeDetailInfoAction } from '@/store/modules/detail'

import EntireRoomsWrapper from './style'
import RoomItem from '@/components/room-item'

import { IEntireRoomDetail } from '@/store/modules/entire/types'

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state: RootState) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  )
  const navigate = useNavigate()

  const dispatch = useDispatch()
  function itemClick(itemData: IEntireRoomDetail) {
    dispatch(changeDetailInfoAction(itemData))
    navigate('/detail')
  }

  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item) => {
          return (
            <RoomItem
              key={item._id}
              itemData={item}
              itemWidth="20%"
              itemClick={() => itemClick(item)}
            />
          )
        })}
      </div>

      {isLoading && <div className="shade"></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms
