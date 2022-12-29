import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'
import areaReducer from './modules/area'
import detailReducer from './modules/detail'
import mainReducer from './modules/main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    area: areaReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
