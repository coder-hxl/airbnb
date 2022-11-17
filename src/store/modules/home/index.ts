import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHotRecommendDestData,
  getLongForData,
  getPlusData,
} from '@/services'

import { IAction } from '@/store/types'
import {
  IHomeState,
  IDiscountInfo,
  IGoodPriceInfo,
  IHighScoreInfo,
  IHotRecommendDestInfo,
  ILongForInfo,
  IPlusInfo,
} from './types'

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

    getLongForData().then((res) => {
      dispatch(changeLongForAction(res))
    })

    getPlusData().then((res) => {
      dispatch(changePlusAction(res))
    })
  }
)

const initialState: IHomeState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  hotRecommendDestInfo: {},
  longForInfo: {},
  plusInfo: {},
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }: IAction<IGoodPriceInfo>) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }: IAction<IHighScoreInfo>) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }: IAction<IDiscountInfo>) {
      state.discountInfo = payload
    },
    changeHotRecommendDestAction(
      state,
      { payload }: IAction<IHotRecommendDestInfo>
    ) {
      state.hotRecommendDestInfo = payload
    },
    changeLongForAction(state, { payload }: IAction<ILongForInfo>) {
      state.longForInfo = payload
    },
    changePlusAction(state, { payload }: IAction<IPlusInfo>) {
      state.plusInfo = payload
    },
  },
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendDestAction,
  changeLongForAction,
  changePlusAction,
} = homeSlice.actions

export default homeSlice.reducer
