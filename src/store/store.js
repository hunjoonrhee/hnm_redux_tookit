import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
