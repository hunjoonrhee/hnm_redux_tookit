import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProductsThunk, getProductBySkuThunk } from './productThunk';
import { toast } from 'react-toastify';

const initialState = {
  products: [],
  selectedProduct: {},
  getProductsLoading: false,
  getProductsDone: false,
  getProductsError: null,
  createProductLoading: false,
  createProductDone: false,
  createProductError: null,
  getProductBySkuLoading: false,
  getProductBySkuDone: false,
  getProductBySkuError: null,
  totalPageNum: 0,
  pageSize: 0,
};

export const getAllProducts = createAsyncThunk('product/getAllProducts', getAllProductsThunk);
export const getProductBySku = createAsyncThunk('product/getProductBySku', getProductBySkuThunk);

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
      })
      .addCase(getProductBySku.pending, (state) => {
        state.getProductBySkuLoading = true;
      })
      .addCase(getProductBySku.fulfilled, (state, action) => {
        console.log(action.payload);
        state.getProductBySkuLoading = false;
        state.getProductBySkuDone = true;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductBySku.rejected, (state, action) => {
        state.getProductBySkuLoading = false;
        state.getProductBySkuDone = false;
        toast.error(action.payload);
      });
  },
});

export const {} = productSlice.actions;
export const productReducer = productSlice.reducer;
