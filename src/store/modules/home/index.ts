import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getHotPlaceData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getWonderfulPlaceData,
  getLongForData,
  getPlusData,
} from '@/services'

import { IAction } from '@/store/types'
import {
  IHomeState,
  IGoodPriceInfo,
  IHighScoreInfo,
  ILongForInfo,
  IPlusInfo,
  IHomeArea,
} from './types'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (state, { dispatch }) => {
    // getHomeGoodPriceData().then((res) => {
    //   dispatch(changeGoodPriceInfoAction(res))
    // })

    // getHomeHighScoreData().then((res) => {
    //   dispatch(changeHighScoreInfoAction(res))
    // })

    getHotPlaceData().then((res) => {
      dispatch(changeHotPlaceInfoAction(res))
    })

    getWonderfulPlaceData().then((res) => {
      dispatch(changeWonderfulPlaceAction(res))
    })

    getLongForData().then((res) => {
      dispatch(changeLongForAction(res))
    })

    // getPlusData().then((res) => {
    //   dispatch(changePlusAction(res))
    // })
  }
)

const initialState: IHomeState = {
  goodPriceInfo: {},
  highScoreInfo: {},
  hotPlaceInfo: {},
  wonderfulPlaceInfo: {},
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
    changeHotPlaceInfoAction(state, { payload }: IAction<IHomeArea>) {
      state.hotPlaceInfo = payload
    },
    changeWonderfulPlaceAction(state, { payload }: IAction<IHomeArea>) {
      state.wonderfulPlaceInfo = payload
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
  changeHotPlaceInfoAction,
  changeWonderfulPlaceAction,
  changeLongForAction,
  changePlusAction,
} = homeSlice.actions

export default homeSlice.reducer
