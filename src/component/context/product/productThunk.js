import api from '../../../utils/api';

export const getAllProductsThunk = async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/product');
    console.log(res.data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
};
