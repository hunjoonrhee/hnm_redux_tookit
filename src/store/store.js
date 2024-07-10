import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../component/context/user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
