import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../reducers/gamesSlice';
import top5GamesReducer from '../reducers/top5GamesSlice';
import filterReducer from '../reducers/filterSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    top5Games: top5GamesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
