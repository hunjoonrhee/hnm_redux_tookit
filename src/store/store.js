import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer, productReducer } from '../component/context';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
