import { createSlice } from '@reduxjs/toolkit'

import { IAction } from '@/store/types'
import { IHeaderConfig, IMainState } from './types'

const initialState: IMainState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false,
  },
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { payload }: IAction<IHeaderConfig>) {
      state.headerConfig = payload
    },
  },
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
