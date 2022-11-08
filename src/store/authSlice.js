import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setCredentials: (state, payload) => {
      //TODO store token here
    },
    logout: (state, action) => {
      //TODO remove token
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectToken = state.auth.token;

export default authSlice.reducer;
