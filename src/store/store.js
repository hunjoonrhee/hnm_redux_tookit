import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { userReducer } from '../context/user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const wrapper = createWrapper(setupStore);
