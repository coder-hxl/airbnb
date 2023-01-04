import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getRoomData } from '@/services/modules/room'

import { IAction } from '@/store/types'
import { IState, IRoomInfo } from './types'

export const fetchRoomDataAction = createAsyncThunk(
  'fetchData',
  (roomId: string, { dispatch }) => {
    // 把旧的清除掉
    dispatch(changeRoomInfoAction({}))

    getRoomData(roomId).then((res) => {
      dispatch(changeRoomInfoAction(res))
    })
  }
)

const initialState: IState = {
  roomInfo: {}
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    changeRoomInfoAction(state, { payload }: IAction<IRoomInfo>) {
      state.roomInfo = payload
    }
  }
})

export const { changeRoomInfoAction } = roomSlice.actions
export default roomSlice.reducer
