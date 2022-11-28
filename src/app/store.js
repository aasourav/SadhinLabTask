import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import employeeSlice from '../features/employee/employeeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    employee: employeeSlice.reducer,
  },
});
