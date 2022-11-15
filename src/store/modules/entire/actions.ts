import { Dispatch } from '@reduxjs/toolkit'

import * as types from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

import { RootState } from '../../'
import { IRoomDetail } from './types'

export function changeRoomListAction(roomList: IRoomDetail[]) {
  return { type: types.CHANGE_ROOM_LIST, roomList }
}

export function changeTotalCountAction(totalCount: number) {
  return { type: types.CHANGE_TOTAL_COUNT, totalCount }
}

export function changeCurrentPage(currentPage: number) {
  return { type: types.CHANGE_CURRENT_PAGE, currentPage }
}

export function fetchRoomDataAction(page = 0) {
  return async (dispatch: Dispatch, state: RootState) => {
    const offset = page * 20
    const res = await getEntireRoomList(offset)
    dispatch(changeCurrentPage(page))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}
