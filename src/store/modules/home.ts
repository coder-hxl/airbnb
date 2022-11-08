import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    message: 'Hello Home'
  },
  reducers: {}
})

export default homeSlice.reducer
