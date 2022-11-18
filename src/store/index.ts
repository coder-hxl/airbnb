import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'
import mainReducer from './modules/main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
