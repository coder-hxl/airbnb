import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
} from '@/services'

import { IHomeState } from './types'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (state, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })

    getDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
  }
)

const initialState: IHomeState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
  },
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions

export default homeSlice.reducer
