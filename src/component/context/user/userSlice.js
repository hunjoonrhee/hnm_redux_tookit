import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createANewUserThunk } from './userThunk';

const initialState = {
  user: null,
  me: null,
  registerLoading: false,
  registerDone: false,
  registerError: null,
  logInLoading: false,
  logInDone: false,
  loginError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
};

export const createANewUser = createAsyncThunk('user/createANewUser', createANewUserThunk);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createANewUser.pending, (state) => {
        state.registerLoading = true;
      })
      .addCase(createANewUser.fulfilled, (state) => {
        state.registerLoading = false;
        state.registerDone = true;
      })
      .addCase(createANewUser.rejected, (state) => {
        state.registerLoading = false;
        state.registerDone = true;
      });
  },
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
