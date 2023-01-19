import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getHotPlaceData,
  getHomeHighScoreData,
  getHomeGoodPriceData,
  getWonderfulPlaceData,
  getLongForData,
  getPlusData
} from '@/services/modules/home'

import { IAction } from '@/store/types'
import { IHomeState, IHomeAreaV2, ILongForInfo, IHomeAreaV1 } from './types'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (state, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })

    getHotPlaceData().then((res) => {
      dispatch(changeHotPlaceInfoAction(res))
    })

    getWonderfulPlaceData().then((res) => {
      dispatch(changeWonderfulPlaceAction(res))
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
  hotPlaceInfo: {},
  wonderfulPlaceInfo: {},
  longForInfo: {},
  plusInfo: {}
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }: IAction<IHomeAreaV2>) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }: IAction<IHomeAreaV2>) {
      state.highScoreInfo = payload
    },
    changeHotPlaceInfoAction(state, { payload }: IAction<IHomeAreaV1>) {
      state.hotPlaceInfo = payload
    },
    changeWonderfulPlaceAction(state, { payload }: IAction<IHomeAreaV1>) {
      state.wonderfulPlaceInfo = payload
    },
    changeLongForAction(state, { payload }: IAction<ILongForInfo>) {
      state.longForInfo = payload
    },
    changePlusAction(state, { payload }: IAction<IHomeAreaV2>) {
      state.plusInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeHotPlaceInfoAction,
  changeWonderfulPlaceAction,
  changeLongForAction,
  changePlusAction
} = homeSlice.actions

export default homeSlice.reducer
