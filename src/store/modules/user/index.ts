import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { signUpData, signInData } from '@/services/modules/user'

import { IAction } from '@/store/types'
import { IUserState } from './types'
import { IAnyObject } from '@/types/common'

export const fetchUserStateDataAction = createAsyncThunk(
  'fetchUserStateDataAction',
  (data: { type: 'signUp' | 'signIn'; formData: IAnyObject }, { dispatch }) => {
    const { type, formData } = data

    if (type === 'signUp') {
      signUpData(formData).then((res) => {
        console.log(res)
      })
    } else {
      signInData(formData)
    }
  }
)

const initialState: IUserState = {
  userInfo: {},
  token: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserStateAction(state, { payload }: IAction<IUserState>) {
      const { userInfo, token } = payload

      state.userInfo = userInfo
      state.token = token
    }
  }
})

export const { changeUserStateAction } = userSlice.actions
export default userSlice.reducer
