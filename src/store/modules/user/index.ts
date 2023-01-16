import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getUserInfoById } from '@/services/modules/user'

import { IAction } from '@/store/types'
import { IUserState } from './types'

export const fetchUserInfoDataAction = createAsyncThunk(
  'fetchUserInfoDataAction',
  async (userId: number | string, { dispatch }) => {
    const userInfoRes = await getUserInfoById(userId)

    dispatch(changeUserStoreAction(userInfoRes))
  }
)

const initialState: IUserState = {
  userInfo: {},
  options: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserStoreAction(state, { payload }: IAction<IUserState>) {
      const { userInfo, options } = payload

      state.userInfo = userInfo
      state.options = options
    }
  }
})

export const { changeUserStoreAction } = userSlice.actions
export default userSlice.reducer
