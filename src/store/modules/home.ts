import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGoodPriceData } from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk('fetchData', async () => {
  const goodPrice = await getHomeGoodPriceData()

  return goodPrice
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {} as any,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPrice = payload
    })
  },
})

export default homeSlice.reducer
