import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { signUpData, signInData } from '@/services/modules/login'
import { getUserInfoById } from '@/services/modules/user'
import { changeLoginConfigAction } from '../main'
import { openFeedbackAction } from '../feedback'
import localCache from '@/utils/cache'

import { IAction } from '@/store/types'
import { ILoginState } from './types'
import { IAnyObject } from '@/types/common'
import { IUserInfo } from '../user/types'

export const fetchLoginDataAction = createAsyncThunk(
  'fetchLoginDataAction',
  async (
    data: { type: 'signUp' | 'signIn'; formData: IAnyObject },
    { dispatch }
  ) => {
    const { type, formData } = data
    const isSignUp = type === 'signUp'

    try {
      if (isSignUp) {
        const loginRes = await signUpData(formData)
        const { id, token } = loginRes

        dispatch(changeTokenAction(token))

        // 获取登录用户信息
        dispatch(fetchLoginInfoDataAction(id))

        // 刷新页面
        window.history.go(0)
      } else {
        await signInData(formData)
      }

      // 其他操作
      dispatch(
        openFeedbackAction({
          type: 'success',
          content: isSignUp ? '登陆成功~' : '注册成功, 请进行登录~'
        })
      )

      dispatch(
        changeLoginConfigAction({ showLogin: !isSignUp, type: 'signUp' })
      )
    } catch (error: any) {
      dispatch(openFeedbackAction({ type: 'error', content: error.message }))
    }
  }
)

export const fetchLoginInfoDataAction = createAsyncThunk(
  'fetchLoginInfoDataAction',
  async (userId: number, { dispatch }) => {
    const { userInfo } = await getUserInfoById(userId)
    dispatch(changeUserInfoAction(userInfo))
  }
)

const initialState: ILoginState = {
  token: localCache.getCache('token'),
  userInfo: localCache.getCache('userInfo') ?? {}
}

const loginSlice = createSlice({
  name: 'login',
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

export const { changeTokenAction, changeUserInfoAction } = loginSlice.actions
export default loginSlice.reducer
