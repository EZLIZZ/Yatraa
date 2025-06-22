import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthChecked: false, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isAuthChecked = true; 
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isAuthChecked = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthChecked = true;
    },
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setAuthChecked } = authSlice.actions;
export default authSlice.reducer;
