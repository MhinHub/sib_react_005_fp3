import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import apiReducer from './api/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    api: apiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
