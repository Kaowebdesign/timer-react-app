// Core
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timerStatus: 'not-started',
  timerSpeed: '1000',
  timerTime: 0
};


export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setStatus: (state, action) => {
      state.timerStatus = action.payload;
    },
    setSpeed: (state, action) => {
      state.timerSpeed = action.payload;
    },
    setTime: (state, action) => {
      state.timerTime = action.payload
    }
  },
});

export const { setStatus, setSpeed, setTime } = timerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTimerStatus = (state) => state.timer.timerStatus;
export const selectTimerSpeed = (state) => state.timer.timerSpeed;
export const selectTimerTime = (state) => state.timer.timerTime;


export default timerSlice.reducer;
