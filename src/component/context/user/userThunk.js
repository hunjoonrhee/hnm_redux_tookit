import api from '../../../utils/api';

export const createANewUserThunk = async (formData, { rejectWithValue }) => {
  try {
    await api.post('/user', formData);
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const logInUserThunk = async ({ email, password }, { rejectWithValue }) => {
  const loginData = { email, password };
  console.log('login loginData', loginData);

  try {
    const res = await api.post('/user/login', loginData);
    const user = res.data;
    sessionStorage.setItem('token', res.data.token);
    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const logOutUserThunk = async ({ rejectWithValue }) => {
  try {
    sessionStorage.removeItem('token');
  } catch (error) {
    return rejectWithValue(error);
  }
};
