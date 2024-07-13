import { signIn, signOut } from 'next-auth/react';

export const createANewUserThunk = async (formData, { rejectWithValue }) => {
  try {
    await axios.post('http://localhost:5002/api/user', formData);
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const logInUserThunk = async ({ email, password }, { rejectWithValue }) => {
  try {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    const user = res.data;
    sessionStorage.setItem('token', res.data.token);
    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const logOutUserThunk = async (_, { rejectWithValue }) => {
  try {
    await signOut({ redirect: false });
  } catch (error) {
    return rejectWithValue(error);
  }
};
