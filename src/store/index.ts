import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'
import areaReducer from './modules/area'
import roomReducer from './modules/room'
import mainReducer from './modules/main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    area: areaReducer,
    room: roomReducer,
    main: mainReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
