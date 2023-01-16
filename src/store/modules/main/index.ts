import { createSlice } from '@reduxjs/toolkit'

import { IAction } from '@/store/types'
import { IHeaderConfig, IMainState, ILoginConfig, IFooterConfig } from './types'

const initialState: IMainState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false
  },
  footerConfig: {
    showFooter: true
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
    changeFooterConfigAction(state, { payload }: IAction<IFooterConfig>) {
      state.footerConfig = payload
    },
    changeLoginConfigAction(state, { payload }: IAction<ILoginConfig>) {
      state.loginConfig = payload
    }
  }
})

export const {
  changeHeaderConfigAction,
  changeFooterConfigAction,
  changeLoginConfigAction
} = mainSlice.actions
export default mainSlice.reducer
