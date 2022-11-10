import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGoodPriceData } from '@/services/modules/home'

import { IGoodPrice, IHomeState } from './types'

export const fetchHomeDataAction = createAsyncThunk('fetchData', async () => {
  const goodPrice: IGoodPrice = await getHomeGoodPriceData()

  return goodPrice
})

const initialState: IHomeState = {
  goodPrice: {},
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPrice = payload
    })
  },
})

export default homeSlice.reducer
