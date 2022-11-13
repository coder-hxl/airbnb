import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHotRecommendDestData,
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

    getHotRecommendDestData().then((res) => {
      dispatch(changeHotRecommendDestAction(res))
    })
  }
)

const initialState: IHomeState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  hotRecommendDestInfo: {},
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
    changeHotRecommendDestAction(state, { payload }) {
      state.hotRecommendDestInfo = payload
    },
  },
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendDestAction,
} = homeSlice.actions

export default homeSlice.reducer
