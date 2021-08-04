import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../components/Timer/TimerSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer
  },
});
