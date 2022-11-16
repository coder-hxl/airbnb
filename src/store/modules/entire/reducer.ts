import * as types from './constants'

import { IEntireState, IAction } from './types'

const initialState: IEntireState = {
  roomList: [],
  totalCount: 0,
  currentPage: 0,
  isLoading: false,
}

function reducer(state = initialState, action: IAction): IEntireState {
  switch (action.type) {
    case types.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList ?? [] }

    case types.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount ?? 0 }

    case types.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage ?? 0 }

    case types.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading ?? false }

    default:
      return state
  }
}

export default reducer
