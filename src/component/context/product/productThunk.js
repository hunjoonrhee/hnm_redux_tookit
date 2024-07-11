import api from '../../../utils/api';

export const getAllProductsThunk = async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/product');
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const getProductBySkuThunk = async (sku, { rejectWithValue }) => {
  try {
    console.log('!!!!!!!!!', sku);
    const res = await api.get(`/product/${sku}`);
    console.log('res', res);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
};
