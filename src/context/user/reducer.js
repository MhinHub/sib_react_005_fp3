import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123john',
    },
  },
  reducers: {
    signup: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    // logout: state => {
    //   state.user = null;
    // },
  },
});

export const {signup, logout} = userSlice.actions;

export default userSlice.reducer;
