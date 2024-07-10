import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProductsThunk } from './productThunk';
import { toast } from 'react-toastify';

const initialState = {
  products: [],
  product: {},
  getProductsLoading: false,
  getProductsDone: false,
  getProductsError: null,
  createProductLoading: false,
  createProductDone: false,
  createProductError: null,
  getProductByIdLoading: false,
  getProductByIdDone: false,
  getProductByIdError: null,
  totalPageNum: 0,
  pageSize: 0,
};

export const getAllProducts = createAsyncThunk('product/getAllProducts', getAllProductsThunk);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.getProductsLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.getProductsLoading = false;
        state.getProductsDone = true;
        state.products = action.payload.data;
        state.pageSize = action.payload.pageSize;
        state.totalPageNum = action.payload.totalPageNum;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        console.log(action.payload);
        state.getProductsLoading = false;
        state.getProductsDone = false;
        toast.error(action.payload);
      });
  },
});

export const {} = productSlice.actions;
export const productReducer = productSlice.reducer;
