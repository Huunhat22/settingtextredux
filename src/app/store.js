import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activeColor from '../Reducers/activeColor';
import settingSize from '../Reducers/settingSize';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    activeColor,
    settingSize
  },
  
});
