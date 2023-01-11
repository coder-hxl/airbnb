import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  signUpData,
  signInData,
  getUserInfoById
} from '@/services/modules/user'
import { changeLoginConfigAction } from '../main'
import localCache from '@/utils/cache'

import { IAction } from '@/store/types'
import { IUserInfo, IUserState } from './types'
import { IAnyObject } from '@/types/common'

export const fetchUserStateDataAction = createAsyncThunk(
  'fetchUserStateDataAction',
  async (
    data: { type: 'signUp' | 'signIn'; formData: IAnyObject },
    { dispatch }
  ) => {
    const { type, formData } = data

    if (type === 'signUp') {
      const loginRes = await signUpData(formData)
      const { id, token } = loginRes

      localCache.setCache('token', token)
      dispatch(changeLoginConfigAction({ showLogin: false, type: 'signUp' }))
      dispatch(changeTokenAction(token))

      const userInfoRes = await getUserInfoById(id)

      localCache.setCache('userInfo', userInfoRes)
      dispatch(changeUserInfoAction(userInfoRes))
    } else {
      const signInRes = signInData(formData)

      if (typeof signInRes === 'string') {
        dispatch(changeLoginConfigAction({ showLogin: true, type: 'signUp' }))
      }
    }
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
      state.token = payload
    },
    changeUserInfoAction(state, { payload }: IAction<IUserInfo>) {
      state.userInfo = payload
    }
  }
})

export const { changeTokenAction, changeUserInfoAction } = userSlice.actions
export default userSlice.reducer
