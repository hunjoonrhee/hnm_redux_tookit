import api from '../../../utils/api';

export const createANewUserThunk = async (formData, { rejectWithValue }) => {
  try {
    const res = await api.post('/user', formData);

    if (res.status === 403) {
      return rejectWithValue(res.message);
    }

    return await res.json();
  } catch (error) {
    return rejectWithValue(error);
  }
};
