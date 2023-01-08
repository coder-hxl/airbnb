import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getReviewData, getRoomData } from '@/services/modules/room'

import { IAction } from '@/store/types'
import { IState, IRoomInfo, IReview } from './types'

export const fetchRoomDataAction = createAsyncThunk(
  'fetchRoomInfoData',
  (roomId: string, { dispatch }) => {
    // 把旧的清除掉
    dispatch(changeRoomInfoAction({}))

    getRoomData(roomId).then((res) => {
      dispatch(changeRoomInfoAction(res))
    })
  }
)

export const fetchReviewDataAction = createAsyncThunk(
  'fetchReviewData',
  (data: { roomId: number; offset?: number }, { dispatch }) => {
    const { roomId, offset = 0 } = data

    getReviewData(roomId, offset, 8).then((res) => {
      dispatch(changeReviewAction(res))
    })
  }
)

const initialState: IState = {
  roomInfo: {},
  review: {}
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    changeRoomInfoAction(state, { payload }: IAction<IRoomInfo>) {
      state.roomInfo = payload
    },

    changeReviewAction(state, { payload }: IAction<IReview>) {
      state.review = payload
    }
  }
})

export const { changeRoomInfoAction, changeReviewAction } = roomSlice.actions
export default roomSlice.reducer
