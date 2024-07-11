import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createANewUserThunk, logInUserThunk, logOutUserThunk } from './userThunk';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  me: null,
  registerLoading: false,
  registerDone: false,
  registerError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
};

export const createANewUser = createAsyncThunk('user/createANewUser', createANewUserThunk);
export const logInUser = createAsyncThunk('user/logInUser', logInUserThunk);
export const logOutUser = createAsyncThunk('user/logOutUser', logOutUserThunk);

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
        toast.success('Register succeed!');
      })
      .addCase(createANewUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerDone = false;
        toast.error(action.payload.message);
      })
      .addCase(logInUser.pending, (state) => {
        state.logInLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.user = action.payload.user;
        toast.success('Welcome! Happy Shopping!');
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInDone = false;
        toast.error(action.payload.message);
      });
  },
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
