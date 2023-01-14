import { createSlice } from '@reduxjs/toolkit'

import { IAction } from '@/store/types'
import { IFeedbackStore } from './types'

const initialState: IFeedbackStore = {
  isShow: false,
  timeout: 2000,
  type: '',
  content: ''
}

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    successFeedbackAction(state, { payload }: IAction<string>) {
      state.isShow = true
      state.type = 'success'
      state.content = payload
    },
    errorFeedbackAction(state, { payload }: IAction<string>) {
      state.isShow = true
      state.type = 'error'
      state.content = payload
    },
    warningFeedbackAction(state, { payload }: IAction<string>) {
      state.isShow = true
      state.type = 'warning'
      state.content = payload
    },
    closeFeedbackAction(state) {
      state.isShow = false
      state.type = ''
      state.content = ''
    }
  }
})

export const {
  successFeedbackAction,
  errorFeedbackAction,
  warningFeedbackAction,
  closeFeedbackAction
} = feedbackSlice.actions

export default feedbackSlice.reducer
