import {configureStore} from '@reduxjs/toolkit';
import configSlice from './config/configSlice';
//import counterReducer from '../features/counter/counterSlice'
// import storage from 'redux-persist/lib/storage'
import RootReducer from './RootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
