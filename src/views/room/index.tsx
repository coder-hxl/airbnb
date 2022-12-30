import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import RoomWrapper from './style'

import RoomPictures from './c-cpns/room-pictures'
import RoomInfos from './c-cpns/room-infos'

import { RootState } from '@/store'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchRoomDataAction } from '@/store/modules/room'

const Room = memo(() => {
  const { roomId } = useParams()
  const { roomInfo } = useSelector(
    (state: RootState) => ({
      roomInfo: state.room.roomInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchRoomDataAction(roomId ?? ''))
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch, roomId])

  return (
    <RoomWrapper>
      <RoomPictures pictures={roomInfo?.pictureUrls ?? []} />
      <RoomInfos itemData={roomInfo ?? {}} />
    </RoomWrapper>
  )
})

export default Room
