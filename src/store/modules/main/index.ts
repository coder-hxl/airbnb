import { createSlice } from '@reduxjs/toolkit'

import { IAction } from '@/store/types'
import { IHeaderConfig, IMainState, ILoginConfig } from './types'

const initialState: IMainState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false
  },
  loginConfig: {
    showLogin: false,
    type: 'signUp'
  }
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { payload }: IAction<IHeaderConfig>) {
      state.headerConfig = payload
    },
    changeLoginConfigAction(state, { payload }: IAction<ILoginConfig>) {
      state.loginConfig = payload
    }
  }
})

export const { changeHeaderConfigAction, changeLoginConfigAction } =
  mainSlice.actions
export default mainSlice.reducer
