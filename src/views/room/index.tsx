import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import RoomWrapper from './style'

import {
  fetchRoomDataAction,
  fetchReviewDataAction
} from '@/store/modules/room'
import {
  changeFooterConfigAction,
  changeHeaderConfigAction
} from '@/store/modules/main'
import { isEmptyO } from '@/utils/is-empty'
import RoomPictures from './c-cpns/room-pictures'
import RoomInfos from './c-cpns/room-infos'

import { RootState } from '@/store'
import { IReview, IRoomInfo } from '@/store/modules/room/types'

const Room = memo(() => {
  const { roomId } = useParams() as { roomId: string }
  const { roomInfo, review } = useSelector(
    (state: RootState) => ({
      roomInfo: state.room.roomInfo,
      review: state.room.review
    }),
    shallowEqual
  )

  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchRoomDataAction(roomId))
    dispatch(fetchReviewDataAction({ roomId: Number(roomId) }))
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
    dispatch(changeFooterConfigAction({ showFooter: true }))
  }, [dispatch, roomId])

  return (
    <RoomWrapper>
      {!isEmptyO(roomInfo) && (
        <RoomPictures pictures={roomInfo.pictureUrls as string[]} />
      )}
      {!isEmptyO({ ...roomInfo, ...review }) && (
        <RoomInfos
          itemData={roomInfo as IRoomInfo}
          review={review as IReview}
        />
      )}
    </RoomWrapper>
  )
})

export default Room
