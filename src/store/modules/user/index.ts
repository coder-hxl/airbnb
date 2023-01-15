import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  signUpData,
  signInData,
  getUserInfoById
} from '@/services/modules/user'
import { changeLoginConfigAction } from '../main'
import localCache from '@/utils/cache'
import { openFeedbackAction } from '../feedback'

import { IAction } from '@/store/types'
import { IUserInfo, IUserState } from './types'
import { IAnyObject } from '@/types/common'

export const fetchLoginDataAction = createAsyncThunk(
  'fetchLoginDataAction',
  async (
    data: { type: 'signUp' | 'signIn'; formData: IAnyObject },
    { dispatch }
  ) => {
    const { type, formData } = data

    if (type === 'signUp') {
      const loginRes = await signUpData(formData)
      const { id, token } = loginRes

      dispatch(openFeedbackAction({ type: 'success', content: '登陆成功~' }))

      dispatch(changeLoginConfigAction({ showLogin: false, type: 'signUp' }))
      dispatch(changeTokenAction(token))

      // 获取用户信息
      dispatch(fetchUserInfoDataAction(id))
    } else {
      await signInData(formData)

      dispatch(openFeedbackAction({ type: 'success', content: '注册成功~' }))

      dispatch(changeLoginConfigAction({ showLogin: true, type: 'signUp' }))
    }
  }
)

export const fetchUserInfoDataAction = createAsyncThunk(
  'fetchUserInfoDataAction',
  async (userId: number, { dispatch }) => {
    const userInfoRes = await getUserInfoById(userId)

    dispatch(changeUserInfoAction(userInfoRes))
  }
)

const initialState: IUserState = {
  token: localCache.getCache('token'),
  userInfo: localCache.getCache('userInfo') ?? {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTokenAction(state, { payload }: IAction<string | undefined>) {
      localCache.setCache('token', payload)
      state.token = payload
    },
    changeUserInfoAction(state, { payload }: IAction<IUserInfo>) {
      localCache.setCache('userInfo', payload)
      state.userInfo = payload
    }
  }
})

export const { changeTokenAction, changeUserInfoAction } = userSlice.actions
export default userSlice.reducer
