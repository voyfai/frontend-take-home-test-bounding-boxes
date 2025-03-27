import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import documentReducer from './documentSlice';

export const store = configureStore({
  reducer: {
    document: documentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
