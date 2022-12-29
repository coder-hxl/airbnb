import { Dispatch } from '@reduxjs/toolkit'

import * as types from './constants'
import { getAreaRoomList } from '@/services/modules/area'

import { RootState } from '../..'
import { IAction, IAreaRoom } from './types'

export function changeRoomListAction(roomList: IAreaRoom[]): IAction {
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

export function fetchRoomDataAction(areaName: string, page = 0) {
  return async (dispatch: Dispatch, state: RootState) => {
    dispatch(changeIsLoading(true))

    const res = await getAreaRoomList(areaName, page * 20)

    dispatch(changeIsLoading(false))
    dispatch(changeCurrentPage(page))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomListAction(res.list))
  }
}
