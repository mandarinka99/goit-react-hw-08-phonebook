import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.loading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [register.rejected](state) {
      state.loading = false;
    },
    [logIn.pending](state) {
      state.loading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [logIn.rejected](state) {
      state.loading = false;
    },
    [logOut.pending](state) {
      state.loading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [logOut.rejected](state) {
      state.loading = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetching = true;
      state.loading = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetching = false;
      state.loading = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetching = false;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
