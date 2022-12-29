import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '@/store'
import { changeDetailInfoAction } from '@/store/modules/detail'

import AreaRoomsWrapper from './style'
import RoomItem from '@/components/room-item'

import { IAreaRoom } from '@/store/modules/area/types'

const AreaRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state: RootState) => ({
      roomList: state.area.roomList,
      totalCount: state.area.totalCount,
      isLoading: state.area.isLoading
    }),
    shallowEqual
  )
  const navigate = useNavigate()

  const dispatch = useDispatch()
  function itemClick(itemData: IAreaRoom) {
    // dispatch(changeDetailInfoAction(itemData))
    // navigate('/detail')
  }

  return (
    <AreaRoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item) => {
          return (
            <RoomItem
              key={item.id}
              itemData={item}
              itemWidth="20%"
              itemClick={() => itemClick(item)}
            />
          )
        })}
      </div>

      {isLoading && <div className="shade"></div>}
    </AreaRoomsWrapper>
  )
})

export default AreaRooms
