import { configureStore } from '@reduxjs/toolkit'
import configSlice from './config/configSlice'
//import counterReducer from '../features/counter/counterSlice'
import storage from 'redux-persist/lib/storage'
import RootReducer from './RootReducer'
import persistReducer from 'redux-persist/es/persistReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
let persistConfig={
  key:'root',
  storage:AsyncStorage,
}
let persistedReducer=persistReducer(persistConfig,RootReducer)
export const store = configureStore({
  reducer:persistedReducer
})