import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createANewUserThunk, logInUserThunk } from './userThunk';
import { toast } from 'react-toastify';

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
export const logInUser = createAsyncThunk('user/logInUser', logInUserThunk);

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
      .addCase(createANewUser.rejected, (state, action) => {
        console.log(action.payload);
        state.registerLoading = false;
        state.registerDone = false;
        toast.error(action.payload);
      })
      .addCase(logInUser.pending, (state) => {
        state.logInLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.user = action.payload;
      })
      .addCase(logInUser.rejected, (state) => {
        state.logInLoading = false;
        state.logInDone = false;
      });
  },
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
