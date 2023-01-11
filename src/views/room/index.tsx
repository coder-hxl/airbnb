import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import RoomWrapper from './style'

import RoomPictures from './c-cpns/room-pictures'
import RoomInfos from './c-cpns/room-infos'

import { RootState } from '@/store'
import { changeHeaderConfigAction } from '@/store/modules/main'
import {
  fetchRoomDataAction,
  fetchReviewDataAction
} from '@/store/modules/room'
import { isEmptyO } from '@/utils'

const Room = memo(() => {
  const { roomId } = useParams()
  const { roomInfo, review } = useSelector(
    (state: RootState) => ({
      roomInfo: state.room.roomInfo,
      review: state.room.review
    }),
    shallowEqual
  )

  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchRoomDataAction(roomId ?? ''))
    dispatch(fetchReviewDataAction({ roomId: Number(roomId) }))
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch, roomId])

  return (
    <RoomWrapper>
      {isEmptyO(roomInfo) && (
        <RoomPictures pictures={roomInfo.pictureUrls ?? []} />
      )}
      {isEmptyO({ ...roomInfo, ...review }) && (
        <RoomInfos itemData={roomInfo} review={review} />
      )}
    </RoomWrapper>
  )
})

export default Room
