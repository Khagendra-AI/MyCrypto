import { configureStore } from '@reduxjs/toolkit'
import configSlice from './config/configSlice'
//import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    mainapi: configSlice,
  },
})