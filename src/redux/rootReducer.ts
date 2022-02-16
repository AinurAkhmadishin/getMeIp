import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './sliceReducer/counterSlice';

export const rootReducer = combineReducers({
  counterSlice,
});
