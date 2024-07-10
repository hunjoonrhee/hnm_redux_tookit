import api from '../../../utils/api';

export const createANewUserThunk = async (formData, { rejectWithValue }) => {
  try {
    console.log('register formData', formData);
    const res = await api.post('/user', formData);

    console.log('register, res', res.data);
    if (res.status === 403) {
      return rejectWithValue(res.message);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const logInUserThunk = async ({ email, password }, { rejectWithValue }) => {
  const loginData = { email, password };
  console.log('login loginData', loginData);

  try {
    const res = await api.post('/user/login', loginData);
    console.log('login, res', res);

    if (res.status === 404) {
      return rejectWithValue(res.message);
    }
    if (res.status === 403) {
      return rejectWithValue(res.message);
    }

    const user = await res.data;
    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
};
