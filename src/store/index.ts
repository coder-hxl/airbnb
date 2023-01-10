import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'
import areaReducer from './modules/area'
import roomReducer from './modules/room'
import mainReducer from './modules/main'
import userReducer from './modules/user'

const store = configureStore({
  reducer: {
    home: homeReducer,
    area: areaReducer,
    room: roomReducer,
    main: mainReducer,
    user: userReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
