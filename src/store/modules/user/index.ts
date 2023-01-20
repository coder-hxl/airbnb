import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getUserInfoById, updateUserInfo } from '@/services/modules/user'
import { changeLoginUserInfoAction } from '../login'

import { IAction } from '@/store/types'
import { IUserInfo, IUserState } from './types'

export const fetchUserInfoDataAction = createAsyncThunk(
  'fetchUserInfoDataAction',
  async (userId: number | string, { dispatch }) => {
    // 清除旧数据
    dispatch(changeUserStoreAction({ userInfo: {}, options: {} }))

    const userInfoRes = await getUserInfoById(userId)

    dispatch(changeUserStoreAction(userInfoRes))
  }
)

export const updateUserInfoDataAction = createAsyncThunk(
  'updateUserInfoDataAction',
  async (data: { userId: number; formData: IUserInfo }, { dispatch }) => {
    const { userId, formData } = data
    await updateUserInfo(formData)

    const userInfoRes = await getUserInfoById(userId)
    dispatch(changeUserStoreAction(userInfoRes))
    dispatch(changeLoginUserInfoAction(userInfoRes.userInfo))
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
