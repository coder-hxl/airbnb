import { createSlice } from '@reduxjs/toolkit'

import { IAction } from '@/store/types'
import { IFeedbackStore } from './types'

let id = 0
const initialState: IFeedbackStore = {
  isShow: false,
  timeout: 3000,
  queue: []
}

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    openFeedbackAction(
      state,
      {
        payload
      }: IAction<{ type: 'success' | 'error' | 'warning'; content: string }>
    ) {
      const { type, content } = payload

      id++
      state.isShow = true
      state.queue.push({ id, type, content })
    },
    closeFeedbackAction(state) {
      state.queue.shift()

      if (!state.queue.length) {
        state.isShow = false
      }
    }
  }
})

export const { openFeedbackAction, closeFeedbackAction } = feedbackSlice.actions

export default feedbackSlice.reducer
