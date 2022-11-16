import { Dispatch } from '@reduxjs/toolkit'

import * as types from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

import { RootState } from '../../'
import { IAction, IRoomDetail } from './types'

export function changeRoomListAction(roomList: IRoomDetail[]): IAction {
  return { type: types.CHANGE_ROOM_LIST, roomList }
}

export function changeTotalCountAction(totalCount: number): IAction {
  return { type: types.CHANGE_TOTAL_COUNT, totalCount }
}

export function changeCurrentPage(currentPage: number): IAction {
  return { type: types.CHANGE_CURRENT_PAGE, currentPage }
}

export function changeIsLoading(isLoading: boolean): IAction {
  return { type: types.CHANGE_IS_LOADING, isLoading }
}

export function fetchRoomDataAction(page = 0) {
  return async (dispatch: Dispatch, state: RootState) => {
    dispatch(changeIsLoading(true))

    const res = await getEntireRoomList(page * 20)

    dispatch(changeIsLoading(false))
    dispatch(changeCurrentPage(page))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomListAction(res.list))
  }
}
