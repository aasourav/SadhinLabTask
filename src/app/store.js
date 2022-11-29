import { configureStore } from '@reduxjs/toolkit';
import employeeSlice from '../features/employee/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
});
